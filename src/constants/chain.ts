const baseURL = '/images/symbol';

// chain info key
export const CHAIN = {
  COSMOS: 'cosmos',
  IRIS: 'iris',
  BAND: 'band',
  KAVA: 'kava',
  AKASH: 'akash',
  CERTIK: 'certik',
  SENTINEL: 'sentinel',
  PERSISTENCE: 'persistence',
  FETCH_AI: 'fetch-ai',
  SIFCHAIN: 'sifchain',
  CRYPTO_ORG: 'crypto-org',
  KICHAIN: 'kichain',
  STARNAME: 'starname',
  MEDIBLOC: 'medibloc',
  EMONEY: 'emoney',
  RIZON: 'rizon',
  JUNO: 'juno',
  BITCANNA: 'bitcanna',
  REGEN: 'regen',
  COMDEX: 'comdex',
  BITSONG: 'bitsong',
  DESMOS: 'desmos',
  GRAVITY_BRIDGE: 'gravity-bridge',
  LUM: 'lum',
  STARGAZE: 'stargaze',
  CHIHUAHUA: 'chihuahua',
} as const;

// chain info key === path
export const chains = {
  [CHAIN.COSMOS]: {
    chainId: 'cosmoshub-4',
    name: 'cosmos',
    path: CHAIN.COSMOS,
    imgURL: `${baseURL}/cosmos.png`,
    wallet: {
      hdPath: '44/118/0/0/0',
      prefix: 'cosmos',
      support: { ledger: true, keystation: true },
      isProto: true,
    },
    lcdURL: 'https://lcd-cosmos.cosmostation.io',
    symbolName: 'ATOM',
    denom: 'uatom',
    decimal: 6,
    coingeckoId: 'cosmos',
    validatorIconDirectory: 'cosmoshub',
    mintscanPath: 'cosmos',
    fee: {
      default: '0.005',
      delegate: '0.005',
      undelegate: '0.005',
      redelegate: '0.005',
      withdraw: '0.005',
      withdrawReward: '0.005',
      withdrawCommission: '0.005',
      modifyWithdrawAddress: '0.005',
    },
    gas: {
      default: '200000',
      delegate: '200000',
      undelegate: '200000',
      redelegate: '300000',
      withdraw: '200000',
      withdrawReward: '200000',
      withdrawCommission: '200000',
      modifyWithdrawAddress: '200000',
    },
  },
  [CHAIN.IRIS]: {
    chainId: 'irishub-1',
    name: 'iris',
    path: CHAIN.IRIS,
    imgURL: `${baseURL}/iris.png`,
    wallet: {
      hdPath: '44/118/0/0/0',
      prefix: 'iaa',
      support: { ledger: true, keystation: true },
      isProto: true,
    },
    lcdURL: 'https://lcd-iris.cosmostation.io',
    symbolName: 'IRIS',
    denom: 'uiris',
    decimal: 6,
    coingeckoId: 'iris-network',
    validatorIconDirectory: 'irishub',
    mintscanPath: 'iris',
    fee: {
      default: '0.2',
      delegate: '0.6',
      undelegate: '0.6',
      redelegate: '0.6',
      withdraw: '0.6',
      withdrawReward: '0.6',
      withdrawCommission: '0.6',
      modifyWithdrawAddress: '0.6',
    },
    gas: {
      default: '200000',
      delegate: '200000',
      undelegate: '200000',
      redelegate: '300000',
      withdraw: '200000',
      withdrawReward: '200000',
      withdrawCommission: '200000',
      modifyWithdrawAddress: '200000',
    },
  },
  [CHAIN.KAVA]: {
    chainId: 'kava-8',
    name: 'kava',
    path: CHAIN.KAVA,
    imgURL: `${baseURL}/kava.png`,
    hdPath: '44/118/0/0/0',
    wallet: {
      hdPath: '44/118/0/0/0',
      prefix: 'kava',
      support: { ledger: true, keystation: true },
      isProto: false,
    },
    lcdURL: 'https://lcd-kava.cosmostation.io',
    symbolName: 'KAVA',
    denom: 'ukava',
    decimal: 6,
    coingeckoId: 'kava',
    validatorIconDirectory: 'kava/kava-2',
    mintscanPath: 'kava',
    fee: {
      default: '0.005',
      delegate: '0.005',
      undelegate: '0.005',
      redelegate: '0.005',
      withdraw: '0.005',
      withdrawReward: '0.005',
      withdrawCommission: '0.005',
      modifyWithdrawAddress: '0.005',
    },
    gas: {
      default: '200000',
      delegate: '500000',
      undelegate: '500000',
      redelegate: '500000',
      withdraw: '400000',
      withdrawReward: '500000',
      withdrawCommission: '500000',
      modifyWithdrawAddress: '500000',
    },
  },
  [CHAIN.BAND]: {
    chainId: 'laozi-mainnet',
    name: 'band',
    path: CHAIN.BAND,
    imgURL: `${baseURL}/band.png`,
    hdPath: '44/494/0/0/0',
    wallet: {
      hdPath: '44/494/0/0/0',
      prefix: 'band',
      support: { ledger: false, keystation: true },
      isProto: false,
    },
    lcdURL: 'https://lcd-band.cosmostation.io',
    symbolName: 'BAND',
    denom: 'uband',
    decimal: 6,
    coingeckoId: 'band-protocol',
    validatorIconDirectory: 'bandprotocol',
    mintscanPath: 'band',
    fee: {
      default: '0.005',
      delegate: '0.005',
      undelegate: '0.005',
      redelegate: '0.005',
      withdraw: '0.005',
      withdrawReward: '0.005',
      withdrawCommission: '0.005',
      modifyWithdrawAddress: '0.005',
    },
    gas: {
      default: '200000',
      delegate: '200000',
      undelegate: '200000',
      redelegate: '300000',
      withdraw: '200000',
      withdrawReward: '200000',
      withdrawCommission: '200000',
      modifyWithdrawAddress: '200000',
    },
  },
  [CHAIN.AKASH]: {
    chainId: 'akashnet-2',
    name: 'akash',
    path: CHAIN.AKASH,
    imgURL: `${baseURL}/akash.png`,
    wallet: {
      hdPath: '44/118/0/0/0',
      prefix: 'akash',
      support: { ledger: true, keystation: true },
      isProto: false,
    },
    lcdURL: 'https://lcd-akash.cosmostation.io',
    symbolName: 'AKT',
    denom: 'uakt',
    decimal: 6,
    coingeckoId: 'akash-network',
    validatorIconDirectory: 'akash',
    mintscanPath: 'akash',
    fee: {
      default: '0.005',
      delegate: '0.005',
      undelegate: '0.005',
      redelegate: '0.005',
      withdraw: '0.005',
      withdrawReward: '0.005',
      withdrawCommission: '0.005',
      modifyWithdrawAddress: '0.005',
    },
    gas: {
      default: '200000',
      delegate: '200000',
      undelegate: '400000',
      redelegate: '400000',
      withdraw: '900000',
      withdrawReward: '200000',
      withdrawCommission: '200000',
      modifyWithdrawAddress: '200000',
    },
  },
  [CHAIN.CERTIK]: {
    chainId: 'shentu-2.2',
    name: 'certik',
    path: CHAIN.CERTIK,
    imgURL: `${baseURL}/certik.png`,
    wallet: {
      hdPath: '44/118/0/0/0',
      prefix: 'certik',
      support: { ledger: true, keystation: true },
      isProto: true,
    },
    lcdURL: 'https://lcd-certik.cosmostation.io',
    symbolName: 'CTK',
    denom: 'uctk',
    decimal: 6,
    coingeckoId: 'certik',
    validatorIconDirectory: 'certik',
    mintscanPath: 'certik',
    fee: {
      default: '0.005',
      delegate: '0.005',
      undelegate: '0.005',
      redelegate: '0.0075',
      withdraw: '0.005',
      withdrawReward: '0.005',
      withdrawCommission: '0.005',
      modifyWithdrawAddress: '0.005',
    },
    gas: {
      default: '200000',
      delegate: '200000',
      undelegate: '200000',
      redelegate: '300000',
      withdraw: '200000',
      withdrawReward: '200000',
      withdrawCommission: '200000',
      modifyWithdrawAddress: '200000',
    },
  },
  [CHAIN.SENTINEL]: {
    chainId: 'sentinelhub-2',
    name: 'sentinel',
    path: CHAIN.SENTINEL,
    imgURL: `${baseURL}/sentinel.png`,
    wallet: {
      hdPath: '44/118/0/0/0',
      prefix: 'sent',
      support: { ledger: true, keystation: true },
      isProto: false,
    },
    lcdURL: 'https://lcd-sentinel.cosmostation.io',
    symbolName: 'DVPN',
    denom: 'udvpn',
    decimal: 6,
    coingeckoId: 'sentinel-group',
    validatorIconDirectory: 'sentinel',
    mintscanPath: 'sentinel',
    fee: {
      default: '0.02',
      delegate: '0.02',
      undelegate: '0.02',
      redelegate: '0.03',
      withdraw: '0.03',
      withdrawReward: '0.02',
      withdrawCommission: '0.02',
      modifyWithdrawAddress: '0.02',
    },
    gas: {
      default: '200000',
      delegate: '200000',
      undelegate: '200000',
      redelegate: '300000',
      withdraw: '200000',
      withdrawReward: '200000',
      withdrawCommission: '200000',
      modifyWithdrawAddress: '200000',
    },
  },
  [CHAIN.PERSISTENCE]: {
    chainId: 'core-1',
    name: 'persistence',
    path: CHAIN.PERSISTENCE,
    imgURL: `${baseURL}/persistence.png`,
    wallet: {
      hdPath: '44/118/0/0/0',
      prefix: 'persistence',
      support: { ledger: true, keystation: true },
      isProto: false,
    },
    lcdURL: 'https://lcd-persistence.cosmostation.io',
    symbolName: 'XPRT',
    denom: 'uxprt',
    decimal: 6,
    coingeckoId: 'persistence',
    validatorIconDirectory: 'persistence',
    mintscanPath: 'persistence',
    fee: {
      default: '0',
      delegate: '0',
      undelegate: '0',
      redelegate: '0',
      withdraw: '0',
      withdrawReward: '0',
      withdrawCommission: '0',
      modifyWithdrawAddress: '0',
    },
    gas: {
      default: '200000',
      delegate: '200000',
      undelegate: '200000',
      redelegate: '300000',
      withdraw: '200000',
      withdrawReward: '200000',
      withdrawCommission: '200000',
      modifyWithdrawAddress: '200000',
    },
  },
  [CHAIN.FETCH_AI]: {
    chainId: 'fetchhub-2',
    name: 'fetch.ai',
    path: CHAIN.FETCH_AI,
    imgURL: `${baseURL}/fetch-ai.png`,
    wallet: {
      hdPath: '44/118/0/0/0',
      prefix: 'fetch',
      support: { ledger: true, keystation: true },
      isProto: false,
    },
    lcdURL: 'https://lcd-fetchai.cosmostation.io',
    symbolName: 'FET',
    denom: 'afet',
    decimal: 18,
    coingeckoId: 'fetch-ai',
    validatorIconDirectory: 'fetchai',
    mintscanPath: 'fetchai',
    fee: {
      default: '0.005',
      delegate: '0.005',
      undelegate: '0.005',
      redelegate: '0.005',
      withdraw: '0.005',
      withdrawReward: '0.005',
      withdrawCommission: '0.005',
      modifyWithdrawAddress: '0.005',
    },
    gas: {
      default: '200000',
      delegate: '200000',
      undelegate: '200000',
      redelegate: '300000',
      withdraw: '200000',
      withdrawReward: '200000',
      withdrawCommission: '200000',
      modifyWithdrawAddress: '200000',
    },
  },
  [CHAIN.SIFCHAIN]: {
    chainId: 'sifchain-1',
    name: 'sifchain',
    path: CHAIN.SIFCHAIN,
    imgURL: `${baseURL}/sifchain.png`,
    wallet: {
      hdPath: '44/118/0/0/0',
      prefix: 'sif',
      support: { ledger: true, keystation: true },
      isProto: false,
    },
    lcdURL: 'https://lcd-sifchain.cosmostation.io',
    symbolName: 'ROWAN',
    denom: 'rowan',
    decimal: 18,
    coingeckoId: 'sifchain',
    validatorIconDirectory: 'sif',
    mintscanPath: 'sifchain',
    fee: {
      default: '0.1',
      delegate: '0.1',
      undelegate: '0.1',
      redelegate: '0.1',
      withdraw: '0.1',
      withdrawReward: '0.1',
      withdrawCommission: '0.1',
      modifyWithdrawAddress: '0.1',
    },
    gas: {
      default: '200000',
      delegate: '200000',
      undelegate: '400000',
      redelegate: '400000',
      withdraw: '200000',
      withdrawReward: '300000',
      withdrawCommission: '200000',
      modifyWithdrawAddress: '200000',
    },
  },
  [CHAIN.CRYPTO_ORG]: {
    chainId: 'crypto-org-chain-mainnet-1',
    name: 'crypto.org',
    path: CHAIN.CRYPTO_ORG,
    imgURL: `${baseURL}/crypto-org.png`,
    wallet: {
      hdPath: '44/394/0/0/0',
      prefix: 'cro',
      support: { ledger: true, keystation: true },
      isProto: true,
    },
    lcdURL: 'https://lcd-cryptocom.cosmostation.io',
    symbolName: 'CRO',
    denom: 'basecro',
    decimal: 8,
    coingeckoId: 'crypto-com-chain',
    validatorIconDirectory: 'cryto',
    mintscanPath: 'crypto-org',
    fee: {
      default: '0.00005',
      delegate: '0.00005',
      undelegate: '0.000075',
      redelegate: '0.000075',
      withdraw: '0.000075',
      withdrawReward: '0.00005',
      withdrawCommission: '0.00005',
      modifyWithdrawAddress: '0.00005',
    },
    gas: {
      default: '200000',
      delegate: '200000',
      undelegate: '200000',
      redelegate: '300000',
      withdraw: '200000',
      withdrawReward: '200000',
      withdrawCommission: '200000',
      modifyWithdrawAddress: '200000',
    },
  },
  [CHAIN.KICHAIN]: {
    chainId: 'kichain-2',
    name: 'kichain',
    path: CHAIN.KICHAIN,
    imgURL: `${baseURL}/kichain.png`,
    wallet: {
      hdPath: '44/118/0/0/0',
      prefix: 'ki',
      support: { ledger: true, keystation: true },
      isProto: false,
    },
    lcdURL: 'https://lcd-kichain.cosmostation.io',
    symbolName: 'XKI',
    denom: 'uxki',
    decimal: 6,
    coingeckoId: 'ki',
    validatorIconDirectory: 'ki',
    mintscanPath: 'ki-chain',
    fee: {
      default: '0.005',
      delegate: '0.005',
      undelegate: '0.005',
      redelegate: '0.0075',
      withdraw: '0.0075',
      withdrawReward: '0.0075',
      withdrawCommission: '0.0075',
      modifyWithdrawAddress: '0.0075',
    },
    gas: {
      default: '200000',
      delegate: '200000',
      undelegate: '200000',
      redelegate: '300000',
      withdraw: '200000',
      withdrawReward: '200000',
      withdrawCommission: '200000',
      modifyWithdrawAddress: '200000',
    },
  },
  [CHAIN.STARNAME]: {
    chainId: 'iov-mainnet-ibc',
    name: 'starname',
    path: CHAIN.STARNAME,
    imgURL: `${baseURL}/starname.png`,
    wallet: {
      hdPath: '44/234/0/0/0',
      prefix: 'star',
      support: { ledger: true, keystation: true },
      isProto: false,
    },
    lcdURL: 'https://lcd-iov.cosmostation.io',
    symbolName: 'IOV',
    denom: 'uiov',
    decimal: 6,
    coingeckoId: 'starname',
    validatorIconDirectory: 'iov',
    mintscanPath: 'starname',
    fee: {
      default: '0.2',
      delegate: '0.2',
      undelegate: '0.2',
      redelegate: '0.2',
      withdraw: '0.2',
      withdrawReward: '0.2',
      withdrawCommission: '0.2',
      modifyWithdrawAddress: '0.2',
    },
    gas: {
      default: '200000',
      delegate: '200000',
      undelegate: '200000',
      redelegate: '300000',
      withdraw: '200000',
      withdrawReward: '300000',
      withdrawCommission: '200000',
      modifyWithdrawAddress: '200000',
    },
  },
  [CHAIN.MEDIBLOC]: {
    chainId: 'panacea-3',
    name: 'medibloc',
    path: CHAIN.MEDIBLOC,
    imgURL: `${baseURL}/medibloc.png`,
    wallet: {
      hdPath: '44/118/0/0/0',
      prefix: 'panacea',
      support: { ledger: true, keystation: true },
      isProto: false,
    },
    lcdURL: 'https://lcd-medibloc.cosmostation.io',
    symbolName: 'MED',
    denom: 'umed',
    decimal: 6,
    coingeckoId: 'medibloc',
    validatorIconDirectory: 'medibloc',
    mintscanPath: 'medibloc',
    fee: {
      default: '1',
      delegate: '1',
      undelegate: '1',
      redelegate: '1',
      withdraw: '1',
      withdrawReward: '1',
      withdrawCommission: '1',
      modifyWithdrawAddress: '1',
    },
    gas: {
      default: '200000',
      delegate: '200000',
      undelegate: '200000',
      redelegate: '300000',
      withdraw: '200000',
      withdrawReward: '200000',
      withdrawCommission: '200000',
      modifyWithdrawAddress: '200000',
    },
  },
  [CHAIN.EMONEY]: {
    chainId: 'emoney-3',
    name: 'emoney',
    path: CHAIN.EMONEY,
    imgURL: `${baseURL}/emoney.png`,
    wallet: {
      hdPath: '44/118/0/0/0',
      prefix: 'emoney',
      support: { ledger: true, keystation: true },
      isProto: false,
    },
    lcdURL: 'https://lcd-emoney.cosmostation.io',
    symbolName: 'NGM',
    denom: 'ungm',
    decimal: 6,
    coingeckoId: 'e-money',
    validatorIconDirectory: 'emoney',
    mintscanPath: 'emoney',
    fee: {
      default: '0.25',
      delegate: '0.25',
      undelegate: '0.25',
      redelegate: '0.3',
      withdraw: '0.25',
      withdrawReward: '0.25',
      withdrawCommission: '0.25',
      modifyWithdrawAddress: '0.25',
    },
    gas: {
      default: '200000',
      delegate: '200000',
      undelegate: '200000',
      redelegate: '300000',
      withdraw: '200000',
      withdrawReward: '200000',
      withdrawCommission: '200000',
      modifyWithdrawAddress: '200000',
    },
  },
  [CHAIN.RIZON]: {
    chainId: 'titan-1',
    name: 'rizon',
    path: CHAIN.RIZON,
    imgURL: `${baseURL}/rizon.png`,
    wallet: {
      hdPath: '44/118/0/0/0',
      prefix: 'rizon',
      support: { ledger: true, keystation: true },
      isProto: false,
    },
    lcdURL: 'https://lcd-rizon.cosmostation.io',
    symbolName: 'ATOLO',
    denom: 'uatolo',
    decimal: 6,
    coingeckoId: 'hdac',
    validatorIconDirectory: 'rizon',
    mintscanPath: 'rizon',
    fee: {
      default: '0.005',
      delegate: '0.005',
      undelegate: '0.005',
      redelegate: '0.005',
      withdraw: '0.005',
      withdrawReward: '0.005',
      withdrawCommission: '0.005',
      modifyWithdrawAddress: '0.005',
    },
    gas: {
      default: '200000',
      delegate: '200000',
      undelegate: '200000',
      redelegate: '300000',
      withdraw: '200000',
      withdrawReward: '200000',
      withdrawCommission: '200000',
      modifyWithdrawAddress: '200000',
    },
  },
  [CHAIN.JUNO]: {
    chainId: 'juno-1',
    name: 'juno',
    path: CHAIN.JUNO,
    imgURL: `${baseURL}/juno.png`,
    wallet: {
      hdPath: '44/118/0/0/0',
      prefix: 'juno',
      support: { ledger: true, keystation: true },
      isProto: false,
    },
    lcdURL: 'https://lcd-juno.cosmostation.io',
    symbolName: 'JUNO',
    denom: 'ujuno',
    decimal: 6,
    coingeckoId: 'juno-network',
    validatorIconDirectory: 'juno',
    mintscanPath: 'juno',
    fee: {
      default: '0.005',
      delegate: '0.005',
      undelegate: '0.005',
      redelegate: '0.005',
      withdraw: '0.005',
      withdrawReward: '0.005',
      withdrawCommission: '0.005',
      modifyWithdrawAddress: '0.005',
    },
    gas: {
      default: '200000',
      delegate: '200000',
      undelegate: '200000',
      redelegate: '300000',
      withdraw: '200000',
      withdrawReward: '200000',
      withdrawCommission: '200000',
      modifyWithdrawAddress: '200000',
    },
  },
  [CHAIN.BITCANNA]: {
    chainId: 'bitcanna-1',
    name: 'bitcanna',
    path: CHAIN.BITCANNA,
    imgURL: `${baseURL}/bitcanna.png`,
    wallet: {
      hdPath: '44/118/0/0/0',
      prefix: 'bcna',
      support: { ledger: true, keystation: true },
      isProto: true,
    },
    lcdURL: 'https://lcd-bitcanna.cosmostation.io',
    symbolName: 'BCNA',
    denom: 'ubcna',
    decimal: 6,
    coingeckoId: 'bitcanna',
    validatorIconDirectory: 'bitcanna',
    mintscanPath: 'bitcanna',
    fee: {
      default: '0.005',
      delegate: '0.005',
      undelegate: '0.005',
      redelegate: '0.005',
      withdraw: '0.005',
      withdrawReward: '0.005',
      withdrawCommission: '0.005',
      modifyWithdrawAddress: '0.005',
    },
    gas: {
      default: '200000',
      delegate: '200000',
      undelegate: '200000',
      redelegate: '300000',
      withdraw: '200000',
      withdrawReward: '200000',
      withdrawCommission: '200000',
      modifyWithdrawAddress: '200000',
    },
  },
  [CHAIN.REGEN]: {
    chainId: 'regen-1',
    name: 'regen',
    path: CHAIN.REGEN,
    imgURL: `${baseURL}/regen.png`,
    wallet: {
      hdPath: '44/118/0/0/0',
      prefix: 'regen',
      support: { ledger: true, keystation: true },
      isProto: true,
    },
    lcdURL: 'https://lcd-regen.cosmostation.io',
    symbolName: 'REGEN',
    denom: 'uregen',
    decimal: 6,
    coingeckoId: 'regen',
    validatorIconDirectory: 'regen',
    mintscanPath: 'regen',
    fee: {
      default: '0.005',
      delegate: '0.005',
      undelegate: '0.005',
      redelegate: '0.005',
      withdraw: '0.005',
      withdrawReward: '0.005',
      withdrawCommission: '0.005',
      modifyWithdrawAddress: '0.005',
    },
    gas: {
      default: '200000',
      delegate: '200000',
      undelegate: '200000',
      redelegate: '300000',
      withdraw: '200000',
      withdrawReward: '200000',
      withdrawCommission: '200000',
      modifyWithdrawAddress: '200000',
    },
  },
  [CHAIN.COMDEX]: {
    chainId: 'comdex-1',
    name: 'comdex',
    path: CHAIN.COMDEX,
    imgURL: `${baseURL}/comdex.png`,
    wallet: {
      hdPath: '44/118/0/0/0',
      prefix: 'comdex',
      support: { ledger: true, keystation: true },
      isProto: true,
    },
    lcdURL: 'https://lcd-comdex.cosmostation.io',
    symbolName: 'CMDX',
    denom: 'ucmdx',
    decimal: 6,
    coingeckoId: 'notExist',
    validatorIconDirectory: 'comdex',
    mintscanPath: 'comdex',
    fee: {
      default: '0.005',
      delegate: '0.005',
      undelegate: '0.005',
      redelegate: '0.0075',
      withdraw: '0.005',
      withdrawReward: '0.005',
      withdrawCommission: '0.005',
      modifyWithdrawAddress: '0.005',
    },
    gas: {
      default: '200000',
      delegate: '200000',
      undelegate: '200000',
      redelegate: '300000',
      withdraw: '200000',
      withdrawReward: '200000',
      withdrawCommission: '200000',
      modifyWithdrawAddress: '200000',
    },
  },

  [CHAIN.BITSONG]: {
    chainId: 'bitsong-2b',
    name: 'bitsong',
    path: CHAIN.BITSONG,
    imgURL: `${baseURL}/bitsong.png`,
    wallet: {
      hdPath: '44/639/0/0/0',
      prefix: 'bitsong',
      support: { ledger: false, keystation: true },
      isProto: false,
    },
    lcdURL: 'https://lcd-bitsong.cosmostation.io',
    symbolName: 'BTSG',
    denom: 'ubtsg',
    decimal: 6,
    coingeckoId: 'bitsong',
    validatorIconDirectory: 'bitsong',
    mintscanPath: 'bitsong',
    fee: {
      default: '0.005',
      delegate: '0.005',
      undelegate: '0.005',
      redelegate: '0.0075',
      withdraw: '0.005',
      withdrawReward: '0.005',
      withdrawCommission: '0.005',
      modifyWithdrawAddress: '0.005',
    },
    gas: {
      default: '200000',
      delegate: '200000',
      undelegate: '200000',
      redelegate: '300000',
      withdraw: '200000',
      withdrawReward: '200000',
      withdrawCommission: '200000',
      modifyWithdrawAddress: '200000',
    },
  },
  [CHAIN.DESMOS]: {
    chainId: 'desmos-mainnet',
    name: 'desmos',
    path: CHAIN.DESMOS,
    imgURL: `${baseURL}/desmos.png`,
    wallet: {
      hdPath: '44/852/0/0/0',
      prefix: 'desmos',
      support: { ledger: false, keystation: true },
      isProto: false,
    },
    lcdURL: 'https://lcd-desmos.cosmostation.io',
    symbolName: 'DSM',
    denom: 'udsm',
    decimal: 6,
    coingeckoId: 'desmos',
    validatorIconDirectory: 'desmos',
    mintscanPath: 'desmos',
    fee: {
      default: '0.005',
      delegate: '0.005',
      undelegate: '0.005',
      redelegate: '0.0075',
      withdraw: '0.005',
      withdrawReward: '0.005',
      withdrawCommission: '0.005',
      modifyWithdrawAddress: '0.005',
    },
    gas: {
      default: '200000',
      delegate: '200000',
      undelegate: '200000',
      redelegate: '300000',
      withdraw: '200000',
      withdrawReward: '200000',
      withdrawCommission: '200000',
      modifyWithdrawAddress: '200000',
    },
  },
  [CHAIN.GRAVITY_BRIDGE]: {
    chainId: 'gravity-bridge-3',
    name: 'g-bridge',
    path: CHAIN.GRAVITY_BRIDGE,
    imgURL: `${baseURL}/gravity-bridge.png`,
    wallet: {
      hdPath: '44/118/0/0/0',
      prefix: 'gravity',
      support: { ledger: true, keystation: true },
      isProto: true,
    },
    lcdURL: 'https://lcd-gravity-bridge.cosmostation.io',
    symbolName: 'GRAVITON',
    denom: 'ugraviton',
    decimal: 6,
    coingeckoId: 'gravity',
    validatorIconDirectory: 'gravity-bridge',
    mintscanPath: 'gravity-bridge',
    fee: {
      default: '0.005',
      delegate: '0.005',
      undelegate: '0.005',
      redelegate: '0.0075',
      withdraw: '0.005',
      withdrawReward: '0.005',
      withdrawCommission: '0.005',
      modifyWithdrawAddress: '0.005',
    },
    gas: {
      default: '200000',
      delegate: '200000',
      undelegate: '200000',
      redelegate: '300000',
      withdraw: '200000',
      withdrawReward: '200000',
      withdrawCommission: '200000',
      modifyWithdrawAddress: '200000',
    },
  },
  [CHAIN.LUM]: {
    chainId: 'lum-network-1',
    name: 'lum',
    path: CHAIN.LUM,
    imgURL: `${baseURL}/lum.png`,
    wallet: {
      hdPath: '44/118/0/0/0',
      prefix: 'lum',
      support: { ledger: true, keystation: true },
      isProto: true,
    },
    lcdURL: 'https://lcd-lum.cosmostation.io',
    symbolName: 'LUM',
    denom: 'ulum',
    decimal: 6,
    coingeckoId: 'unknown_lum',
    validatorIconDirectory: 'lum-network',
    mintscanPath: 'lum',
    fee: {
      default: '0.005',
      delegate: '0.005',
      undelegate: '0.005',
      redelegate: '0.0075',
      withdraw: '0.005',
      withdrawReward: '0.005',
      withdrawCommission: '0.005',
      modifyWithdrawAddress: '0.005',
    },
    gas: {
      default: '200000',
      delegate: '200000',
      undelegate: '200000',
      redelegate: '300000',
      withdraw: '200000',
      withdrawReward: '200000',
      withdrawCommission: '200000',
      modifyWithdrawAddress: '200000',
    },
  },
  [CHAIN.STARGAZE]: {
    chainId: 'stargaze-1',
    name: 'stargaze',
    path: CHAIN.STARGAZE,
    imgURL: `${baseURL}/stargaze.png`,
    wallet: {
      hdPath: '44/118/0/0/0',
      prefix: 'stars',
      support: { ledger: true, keystation: true },
      isProto: true,
    },
    lcdURL: 'https://lcd-stargaze.cosmostation.io',
    symbolName: 'STARS',
    denom: 'ustars',
    decimal: 6,
    coingeckoId: 'stargaze',
    validatorIconDirectory: 'stargaze',
    mintscanPath: 'stargaze',
    fee: {
      default: '0.005',
      delegate: '0.005',
      undelegate: '0.005',
      redelegate: '0.0075',
      withdraw: '0.005',
      withdrawReward: '0.005',
      withdrawCommission: '0.005',
      modifyWithdrawAddress: '0.005',
    },
    gas: {
      default: '200000',
      delegate: '200000',
      undelegate: '200000',
      redelegate: '300000',
      withdraw: '200000',
      withdrawReward: '200000',
      withdrawCommission: '200000',
      modifyWithdrawAddress: '200000',
    },
  },
  [CHAIN.CHIHUAHUA]: {
    chainId: 'chihuahua-1',
    name: 'chihuahua',
    path: CHAIN.CHIHUAHUA,
    imgURL: `${baseURL}/chihuahua.png`,
    wallet: {
      hdPath: '44/118/0/0/0',
      prefix: 'chihuahua',
      support: { ledger: true, keystation: true },
      isProto: true,
    },
    lcdURL: 'https://lcd-chihuahua.cosmostation.io',
    symbolName: 'HUAHUA',
    denom: 'uhuahua',
    decimal: 6,
    coingeckoId: 'chihuahua',
    validatorIconDirectory: 'chihuahua',
    mintscanPath: 'chihuahua',
    fee: {
      default: '0.0035',
      delegate: '0.0035',
      undelegate: '0.0035',
      redelegate: '0.0035',
      withdraw: '0.0035',
      withdrawReward: '0.0035',
      withdrawCommission: '0.0035',
      modifyWithdrawAddress: '0.0035',
    },
    gas: {
      default: '200000',
      delegate: '200000',
      undelegate: '200000',
      redelegate: '300000',
      withdraw: '200000',
      withdrawReward: '200000',
      withdrawCommission: '200000',
      modifyWithdrawAddress: '200000',
    },
  },
} as const;

export const chainValues = Object.values(chains);

export const prefixSortedChainValues = chainValues.sort((a, b) =>
  b.wallet.prefix.length > a.wallet.prefix.length ? 1 : -1,
);

export const chainNames = chainValues.map((chain) => chain.name);
export const chainGeckoIds = chainValues.map((chain) => chain.coingeckoId);

export const chainPaths = Object.values(CHAIN);

export type ChainPath = typeof chainPaths[number];
export type ChainGeckoId = typeof chainGeckoIds[number];
export type ChainValue = typeof chainValues[number];
