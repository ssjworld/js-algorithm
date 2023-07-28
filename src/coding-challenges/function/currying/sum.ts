type CurryFunction = (arg?: number) => CurryFunction;

export const calculateSum = function (initialValue: number = 0): CurryFunction {
  let sum = initialValue;

  function curried(nextValue?: number): CurryFunction;
  function curried(): number;
  function curried(nextValue?: number): CurryFunction | number {
    if (!nextValue) {
      return getFinalResult();
    } else {
      sum += nextValue;
      return curried;
    }
  }

  function getFinalResult(): number {
    return sum;
  }

  return curried;
};
