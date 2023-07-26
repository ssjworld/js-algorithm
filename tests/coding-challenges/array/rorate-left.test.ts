import { rotateLeft } from "@/coding-challenges/array/rotate-left";

describe('Array: rotate left', () => {
  const testArray = [1,5,6];
  const testArrayToString = `[${testArray.toString()}]`;

  test('Array [], rotation = 0', () => {
    const rotatedArray = rotateLeft([], 0); 
    expect(rotatedArray).toStrictEqual([]);
  });

  test('Array [], rotation = 1', () => {
    const rotatedArray = rotateLeft([], 1); 
    expect(rotatedArray).toStrictEqual([]);
  });

  test(`Array ${testArrayToString}, rotation = 1`, () => {
    const rotatedArray = rotateLeft(testArray.slice(), 1); 
    expect(rotatedArray).toStrictEqual([5, 6, 1]);
  });

  test(`Array ${testArrayToString}, rotation = 2`, () => {
    const rotatedArray = rotateLeft(testArray.slice(), 2); 
    expect(rotatedArray).toStrictEqual([6, 1, 5]);
  });

  test(`Array ${testArrayToString}, rotation = 3`, () => {
    const rotatedArray = rotateLeft(testArray.slice(), 3); 
    expect(rotatedArray).toStrictEqual(testArray);
  });

  test(`Array ${testArrayToString}, rotation = 4`, () => {
    const rotatedArray = rotateLeft(testArray.slice(), 4); 
    expect(rotatedArray).toStrictEqual([5, 6, 1]);
  });
});
