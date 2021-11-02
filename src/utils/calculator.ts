import Big from 'big.js';

export function pow(base: number | string, exponent: number) {
  return new Big(base).pow(exponent).toString();
}

export function times(num1: number | string, num2: number | string, toFix?: number) {
  if (toFix !== undefined) {
    return new Big(num1).times(num2).toFixed(toFix, 0);
  }

  return new Big(num1).times(num2).toString();
}

export function plus(num1: number | string, num2: number | string, toFix?: number) {
  if (toFix !== undefined) {
    return new Big(num1).plus(num2).toFixed(toFix, 0);
  }

  return new Big(num1).plus(num2).toString();
}

export function divide(num1: number | string, num2: number | string, toFix?: number) {
  if (toFix !== undefined) {
    return new Big(num1).div(num2).toFixed(toFix, 0);
  }

  return new Big(num1).div(num2).toString();
}

export function gt(num1: number | string, num2: number | string) {
  return new Big(num1).gt(num2);
}

export function minus(num1: number | string, num2: number | string, toFix?: number) {
  if (toFix !== undefined) {
    return new Big(num1).minus(num2).toFixed(toFix, 0);
  }

  return new Big(num1).minus(num2).toString();
}

export function getByte(str: string) {
  return (
    str
      .split('')
      .map((s) => s.charCodeAt(0))
      // eslint-disable-next-line no-bitwise
      .reduce((prev, c) => prev + (c === 10 ? 2 : c >> 7 ? 2 : 1), 0)
  );
}
