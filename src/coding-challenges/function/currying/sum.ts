type CurryFunction = (arg: number) => CurryFunction | number;

export const calculateSum = function (initialValue: number = 0): CurryFunction {
  let sum = initialValue;

  function curried(nextValue: number): CurryFunction | number {
    if (typeof nextValue === 'number') {
      sum += nextValue;
      return curried;
    } else {
      return getFinalSum(sum);
    }
  }

  return curried;
};

function getFinalSum(sum: number): number {
  return sum;
}
