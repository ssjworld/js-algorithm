import { squareSum } from "@/coding-challenges/array/square-sum";

describe('Array: square each number and then sum', () => {
  test('[]', () => {
    expect(squareSum([])).toEqual(0);
  });

  test('[1, 2]', () => {
    expect(squareSum([1, 2])).toEqual(5);
  })
});
