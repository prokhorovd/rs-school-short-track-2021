const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  get size() {
    // throw new Error('Not implemented');
    return this.length;
  }

  enqueue(element) {
    // throw new Error('Not implemented');
    const newElement = new ListNode(element);
    if (!this.head) {
      this.head = newElement;
      this.length++;
    } else {
      let currentElement = this.head;
      while (currentElement.next) {
        currentElement = currentElement.next;
      }
      currentElement.next = newElement;
      this.length++;
    }
  }

  dequeue() {
    // throw new Error('Not implemented');
    if (!this.head) {
      return undefined;
    }
    const currentElement = this.head;
    if (!currentElement.next) {
      this.head = null;
      return currentElement.value;
    }
    this.head = currentElement.next;
    return currentElement.value;
  }
}

module.exports = Queue;
