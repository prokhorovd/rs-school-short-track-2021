/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  // implement variables to track elements
  let headOfTheList = l;
  let currentElement = l;
  let previousElement = null;
  // iterate through list
  while (currentElement) {
    // match found case
    if (currentElement.value === k) {
      if (!previousElement) {
        currentElement = currentElement.next;
        headOfTheList = currentElement;
      } else {
        previousElement.next = currentElement.next;
        currentElement = currentElement.next;
      }
    }
    // next step
    previousElement = currentElement;
    currentElement = currentElement.next;
    // if next element doesn't exist - return head
    if (!currentElement.next) return headOfTheList;
  }
  return headOfTheList;
}

module.exports = removeKFromList;
