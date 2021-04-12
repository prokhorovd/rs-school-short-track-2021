/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor(value) {
    if (value === undefined) {
      this.value = null;
    } else {
      this.value = value;
    }
    this.next = null;
  }

  push(element) {
    // throw new Error('Not implemented');
    if (!this.value) {
      this.value = element;
    } else if (!this.next) {
      this.next = new Stack(element);
    } else {
      let currentElement = this.next;
      while (currentElement.next) {
        currentElement = currentElement.next;
      }
      currentElement.next = new Stack(element);
    }
  }

  pop() {
    if (!this.value) {
      return undefined;
    } if (!this.next) {
      const result = this.value;
      this.value = null;
      return result;
    }
    let currentElement = this.next;
    let previousElement = this;
    while (currentElement.next) {
      previousElement = currentElement;
      currentElement = currentElement.next;
    }
    previousElement.next = null;
    return currentElement.value;
  }

  peek() {
    if (!this.value) {
      return undefined;
    } if (!this.next) {
      return this.value;
    }
    let currentElement = this.next;
    while (currentElement.next) {
      currentElement = currentElement.next;
    }
    return currentElement.value;
  }
}

module.exports = Stack;
