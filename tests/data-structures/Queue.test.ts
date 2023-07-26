import { Queue } from '@/data-structures/Queue';

describe('Queue', () => {
  let queue: Queue;
  const queueMaxLength: number = 2;

  beforeEach(() => {
    queue = new Queue(queueMaxLength);
  });

  test('enqueue() should push an item to the queue', () => {
    queue.enqueue(1);
    expect(queue.length).toEqual(1);
  });

  test(`enqueue() should not push more than ${queueMaxLength} items`, () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.length).toEqual(2);
  });

  test('dequeue() should return the first item from the queue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    const removedItem = queue.dequeue();
    expect(removedItem).toEqual(1);
  });

  test('dequeue() should return undefined', () => {
    const removedItem = queue.dequeue();
    expect(removedItem).toBeUndefined;
  });

  test('queue should be empty', () => {
    expect(queue.isEmpty).toBeTruthy;
  });
});
