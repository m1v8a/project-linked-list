class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.root = value ? new Node(value) : null;
  }

  append(value) {
    let currentRoot = this.root;

    while (currentRoot.next !== null) {
      currentRoot = currentRoot.next;
    }

    currentRoot.next = new Node(value);
  }

  prepend(value) {
    let currentRoot = this.root;
    this.root = new Node(value);
    this.root.next = currentRoot;
  }

  size() {
    if (!this.root) return 0;
    let counter = 1;
    let currentRoot = this.root;

    while (currentRoot.next !== null) {
      counter++;
      currentRoot = currentRoot.next;
    }

    return counter;
  }

  head() {
    if (!this.root) {
      return undefined;
    }
    return this.root.value;
  }

  tail() {
    if (!this.root) {
      return undefined;
    }
    let currenRoot = this.root;
    while (currenRoot.next !== null) {
      currenRoot = currenRoot.next;
    }

    return currenRoot.value;
  }

  at(index) {
    if (!this.root) return undefined;
    let counter = 0;
    let currentRoot = this.root;
    while (currentRoot.next !== null) {
      currentRoot = currentRoot.next;
      counter++;
      if (counter === index) {
        return currentRoot.value;
      }
    }
  }

  pop() {
    if (!this.root) return undefined;
    const nodeToPop = this.root;
    this.root = this.root.next;
    return nodeToPop.value;
  }

  contains(value) {
    if (!this.root) return false;
    let currentRoot = this.root;
    while (currentRoot.next !== null) {
      if (currentRoot.value === value) {
        return true;
      }
      currentRoot = currentRoot.next;
    }

    return false;
  }

  findIndex(value) {}

  toString() {}

  insertAt(index, ...values) {}

  removeAt(index) {}
}

module.exports = LinkedList;
