import { Stack } from '@/data-structures/Stack';

describe('Stack', () => {
  let stack: Stack;
  const stackMaxLength: number = 2;

  beforeEach(() => {
    stack = new Stack(stackMaxLength);
  });

  test('push() should push an item to the stack', () => {
    stack.push(1);
    expect(stack.length).toEqual(1);
  });

  test(`push() should not push more than ${stackMaxLength} items`, () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.length).toEqual(2);
  });

  test('pop() should return the last removed item', () => {
    stack.push(10);
    const removedItem = stack.pop();
    expect(removedItem).toEqual(10);
  });

  test('pop() should return undefined', () => {
    const removedItem = stack.pop();
    expect(removedItem).toBeUndefined;
  });

  test('stack should be empty', () => {
    expect(stack.isEmpty).toBeTruthy;
  });
});
