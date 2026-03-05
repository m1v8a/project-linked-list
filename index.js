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
    if (!this.root) {
      this.root = new Node(value);
      return;
    }
    let currentRoot = this.root;

    while (currentRoot.next !== null) {
      currentRoot = currentRoot.next;
    }

    currentRoot.next = new Node(value);
  }

  prepend(value) {
    if (!this.root) {
      this.root = new Node(value);
      return;
    }
    let currentRoot = this.root;
    this.root = new Node(value);
    this.root.next = currentRoot;
  }

  size() {
    if (!this.root) return 0;
    let counter = 0;
    let currentRoot = this.root;

    while (currentRoot !== null) {
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
    if (!this.root) return;
    let currenRoot = this.root;
    while (currenRoot.next !== null) {
      currenRoot = currenRoot.next;
    }

    return currenRoot.value;
  }

  at(index) {
    if (!this.root) return;
    let counter = 0;
    let currentRoot = this.root;
    while (currentRoot !== null) {
      if (counter === index) {
        return currentRoot.value;
      }

      counter++;
      currentRoot = currentRoot.next;
    }

    return undefined;
  }

  pop() {
    if (!this.root) return;
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

  findIndex(value) {
    let currentRoot = this.root;
    let counter = 0;
    while (currentRoot !== null) {
      if (currentRoot.value === value) {
        return counter;
      }

      counter++;
      currentRoot = currentRoot.next;
    }

    return -1;
  }

  toString() {
    if (!this.root) return "( null )";
    let currentRoot = this.root;
    let string = "";
    while (currentRoot !== null) {
      string += `( ${currentRoot.value} ) -> `;

      currentRoot = currentRoot.next;
      if (currentRoot === null) {
        string += "( null )";
      }
    }

    return string;
  }

  insertAt(index, ...values) {
    if (!this.root) return;
    let counter = 0;
    let currentRoot = this.root;
    while (currentRoot !== null) {
      counter++;

      if (counter === index) {
        const nodeToMove = currentRoot.next;
        currentRoot.next = new Node(...values);
        currentRoot.next.next = nodeToMove;
        return;
      }

      if (currentRoot.next === null) {
        currentRoot.next = new Node(null);
      }

      currentRoot = currentRoot.next;
    }
  }

  removeAt(index) {
    //TODO
  }
}

module.exports = LinkedList;
