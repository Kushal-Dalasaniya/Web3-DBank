import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'compoundInterest' : () => Promise<undefined>,
  'getAmount' : () => Promise<number>,
  'topDown' : (arg_0: number) => Promise<undefined>,
  'topUp' : (arg_0: number) => Promise<undefined>,
}
