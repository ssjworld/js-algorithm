import { calculateSum } from '@/coding-challenges/function/currying/sum';

describe('Function/currying: Infinite currying calculateSum()', () => {
  test('calculateSum(1)(2)(3)() = 6', () => {
    const getSum = calculateSum(1)(2)(3);
    if (typeof getSum === 'function') {
      const sum = getSum(undefined);
      expect(sum).toEqual(6);
    }
  })
});