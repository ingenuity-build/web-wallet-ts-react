import { useEffect, useState } from 'react';
import cx from 'clsx';
import { useSnackbar } from 'notistack';
import { useSetRecoilState } from 'recoil';
import secp256k1 from 'secp256k1';
import type { TextFieldProps } from '@mui/material';
import { TextField } from '@mui/material';

import Button from '~/components/Button';
import type { TransactionInfoData } from '~/components/Dialog/TransactionInfo';
import TransactionInfo from '~/components/Dialog/TransactionInfo';
import Transaction from '~/components/Keystation/Transaction';
import { CHAIN } from '~/constants/chain';
import { useAxios } from '~/hooks/useAxios';
import { useChainSWR } from '~/hooks/useChainSWR';
import { useCreateTx } from '~/hooks/useCreateTx';
import { useCurrentChain } from '~/hooks/useCurrentChain';
import { useCurrentWallet } from '~/hooks/useCurrentWallet';
import { loaderState } from '~/stores/loader';
import { divide, getByte, gt, minus } from '~/utils/calculator';
import Ledger, { createMsgForLedger, LedgerError } from '~/utils/ledger';
import { createBroadcastBody, createSignature, createSignedTx } from '~/utils/txHelper';

import styles from './index.module.scss';

type WalletInfoProps = {
  className?: string;
};

export default function WalletInfo({ className }: WalletInfoProps) {
  const [transactionInfoData, setTransactionInfoData] = useState<TransactionInfoData & { open: boolean }>({
    step: 'doing',
    title: '전송하기',
    open: false,
  });

  const [isOpenedTransaction, setIsOpenedTransaction] = useState(false);
  const setLoader = useSetRecoilState(loaderState);
  const { enqueueSnackbar } = useSnackbar();
  const currentChain = useCurrentChain();
  const currentWallet = useCurrentWallet();

  const createTx = useCreateTx();

  const { boardcastTx } = useAxios();

  const [address, setAddress] = useState('');
  const [sendAmount, setSendAmount] = useState('');
  const [memo, setMemo] = useState('');

  const { isLoading, data, swr } = useChainSWR();

  const { availableAmount, account } = data;

  const handleOnSuccess = () => {
    setAddress('');
    setSendAmount('');
    setMemo('');

    setTimeout(() => {
      void swr.balance.mutate();
    }, 5000);
  };

  const handleOnClick = async () => {
    try {
      await swr.account.mutate();

      if (!account) {
        throw new Error('account not found');
      }

      if (!currentWallet.HDPath) {
        throw new Error(`Path is invalid`);
      }

      if (
        !address.startsWith(currentChain.wallet.prefix) ||
        currentWallet.address === address ||
        currentWallet.address?.length !== address.length
      ) {
        throw new Error(`Address is invalid`);
      }

      if (gt(sendAmount, minus(availableAmount, currentChain.fee.withdraw, currentChain.decimal))) {
        throw new Error(`sendAmount is invalid`);
      }

      if (
        (currentChain.path === CHAIN.IRIS && getByte(memo) > 99) ||
        (currentChain.path !== CHAIN.IRIS && getByte(memo) > 255)
      ) {
        throw new Error(`memo is invalid`);
      }

      const txMsgOrigin = createTx.getSendTxMsg(address, sendAmount);

      const txMsgForSign = createMsgForLedger({
        message: txMsgOrigin,
        accountNumber: account.account_number,
        chainId: currentChain.chainId,
        sequence: account.sequence,
      });

      if (currentWallet.walletType === 'ledger') {
        const ledger = await Ledger();

        const hdPath = currentWallet.HDPath.split('/').map((item) => Number(item));

        const publicKey = await ledger.getPublicKey(hdPath);

        setTransactionInfoData({
          open: true,
          step: 'doing',
          title: '전송하기',
          from: currentWallet.address,
          to: address,
          amount: `${sendAmount} ${currentChain.symbolName}`,
          fee: `${currentChain.fee.withdraw} ${currentChain.symbolName}`,
          memo,
          tx: JSON.stringify(txMsgOrigin, null, 4),
        });
        const ledgerSignature = await ledger.sign(hdPath, Buffer.from(txMsgForSign));

        const secpSignature = secp256k1.signatureImport(ledgerSignature);

        const signature = createSignature({
          publicKey,
          signature: secpSignature,
          accountNumber: account.account_number,
          sequence: account.sequence,
        });

        const tx = createSignedTx(txMsgOrigin, signature);
        const txBody = createBroadcastBody(tx);

        const result = await boardcastTx(txBody);

        setTransactionInfoData((prev) => ({ ...prev, step: 'success', open: true, txHash: result.txhash }));

        handleOnSuccess();
      }

      if (currentWallet.walletType === 'keystation') {
        setIsOpenedTransaction(true);

        const myKeystation = new Keystation('http://localhost:3000', currentChain.lcdURL, currentWallet.HDPath);

        const popup = myKeystation.openWindow('transaction', txMsgForSign, currentWallet.keystationAccount!);

        setTransactionInfoData({
          open: true,
          step: 'doing',
          title: '전송하기',
          from: currentWallet.address,
          to: address,
          amount: `${sendAmount} ${currentChain.symbolName}`,
          fee: `${currentChain.fee.withdraw} ${currentChain.symbolName}`,
          memo,
          tx: JSON.stringify(txMsgOrigin, null, 4),
        });

        const timer = setInterval(() => {
          if (popup.closed) {
            setTransactionInfoData((prev) => {
              if (prev.step === 'success' && prev.open) {
                return prev;
              }

              return { ...prev, open: false };
            });
            setIsOpenedTransaction(false);
            setLoader(false);
            clearInterval(timer);
          }
        }, 500);
      }
    } catch (e) {
      if (e instanceof LedgerError) {
        enqueueSnackbar((e as { message: string }).message, { variant: 'error' });
        setTransactionInfoData((prev) => ({ ...prev, open: false }));
      } else enqueueSnackbar((e as { message: string }).message, { variant: 'error' });
    }
  };

  useEffect(() => {
    setLoader(true);

    if (isLoading) {
      setLoader(false);
    }
  }, [isLoading, setLoader]);

  useEffect(() => {
    setAddress('');
    setSendAmount('');
    setMemo('');
  }, [currentChain]);

  return (
    <>
      <div className={cx(styles.container, className)}>
        <div className={styles.rowContainer}>
          <div className={styles.column1}>사용 가능 수량</div>
          <div className={cx(styles.column2, styles.textEnd)}>
            {availableAmount} {currentChain.symbolName}
          </div>
        </div>
        <div className={styles.rowContainer}>
          <div className={styles.column1}>받을 지갑 주소</div>
          <div className={styles.column2}>
            <Input label="지갑 주소 입력" value={address} onChange={(event) => setAddress(event.currentTarget.value)} />
          </div>
        </div>
        <div className={styles.rowContainer}>
          <div className={styles.column1}>전송 수량</div>
          <div className={styles.column2}>
            <Input
              label="전송 수량 입력"
              sx={{ width: 'calc(100% - 14.8rem)', fontSize: '1.4rem' }}
              value={sendAmount}
              onChange={(event) => setSendAmount(event.currentTarget.value)}
            />
            <Button
              sx={{ fontSize: '1.4rem', width: '7rem', marginLeft: '0.4rem' }}
              onClick={() => setSendAmount(divide(availableAmount, '2', currentChain.decimal))}
            >
              1/2
            </Button>
            <Button
              sx={{ fontSize: '1.4rem', width: '7rem', marginLeft: '0.4rem' }}
              onClick={() => setSendAmount(minus(availableAmount, currentChain.fee.withdraw, currentChain.decimal))}
            >
              MAX
            </Button>
          </div>
        </div>
        <div className={styles.rowContainer}>
          <div className={styles.column1}>메모 (선택 사항)</div>
          <div className={styles.column2}>
            <Input
              label="메모 내용 입력"
              multiline
              size="medium"
              sx={{
                '& .MuiOutlinedInput-root': {
                  minHeight: '6rem',
                },
              }}
              value={memo}
              onChange={(event) => setMemo(event.currentTarget.value)}
            />
          </div>
        </div>
        <div className={styles.rowContainer}>
          <div className={styles.column1}>수수료</div>
          <div className={cx(styles.column2, styles.textEnd)}>
            {currentChain.fee.withdraw} {currentChain.symbolName}
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <Button sx={{ fontSize: '1.4rem', fontWeight: 'bold' }} colorVariant="black" onClick={handleOnClick}>
            Generate & Sign Transaction
          </Button>
        </div>
      </div>
      {isOpenedTransaction && (
        <Transaction
          onSuccess={(e) => {
            setTransactionInfoData((prev) => ({ ...prev, step: 'success', open: true, txHash: e.data.txhash }));

            handleOnSuccess();
          }}
        />
      )}
      <TransactionInfo
        open={transactionInfoData.open}
        data={transactionInfoData}
        onClose={
          transactionInfoData.step === 'success'
            ? () => setTransactionInfoData((prev) => ({ ...prev, open: false }))
            : undefined
        }
      />
    </>
  );
}

function Input(props: TextFieldProps) {
  const { sx, ...etc } = props;
  return (
    <TextField
      variant="outlined"
      size="small"
      sx={{
        width: '100%',
        '& .MuiOutlinedInput-root': {
          height: '4rem',
          fontSize: '1.4rem',
        },
        '& .MuiInputLabel-root': {
          fontSize: '1.4rem',

          '&.Mui-focused': {
            color: 'black',
          },
        },
        '& .MuiOutlinedInput-root:hover': {
          '& > fieldset': {
            borderColor: 'black',
          },
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: 'black',
        },
        ...sx,
      }}
      {...etc}
    />
  );
}
