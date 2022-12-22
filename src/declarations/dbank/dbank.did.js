export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'compoundInterest' : IDL.Func([], [], ['oneway']),
    'getAmount' : IDL.Func([], [IDL.Float64], ['query']),
    'topDown' : IDL.Func([IDL.Float64], [], ['oneway']),
    'topUp' : IDL.Func([IDL.Float64], [], ['oneway']),
  });
};
export const init = ({ IDL }) => { return []; };
