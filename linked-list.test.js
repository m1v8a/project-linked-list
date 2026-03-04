const LinkedList = require("./index.js");

let list = null;
beforeEach(() => {
  list = new LinkedList(1);

  emptyList = new LinkedList();
});

describe("Linked List", () => {
  it("append '2'", () => {
    list.append(2);

    expect(list.root.next.value).toBe(2);
  });

  it("prepend '3'", () => {
    list.prepend(3);
    expect(list.root.value).toBe(3);
  });

  it("returns the size of the list, '0' if list is empty", () => {
    list.append(2);
    expect(list.size()).toBe(2);
    list.append(3);
    expect(list.size()).toBe(3);

    expect(emptyList.size()).toBe(0);
  });

  it("returns the head, 'undefined' if list is empty", () => {
    expect(list.head()).toBe(1);

    expect(emptyList.head()).toBe(undefined);
  });

  it("returns the tail, 'undefined' if list is empty", () => {
    list.append(2);
    expect(list.tail()).toBe(2);
    list.append(3);
    expect(list.tail()).toBe(3);

    expect(emptyList.tail()).toBe(undefined);
  });

  it("returns value at given index, 'undefined' if list is empty or no node on given index", () => {
    for (let i = 2; i <= 5; i++) {
      list.append(i);
    }
    expect(list.at(1)).toBe(2);
    expect(list.at(3)).toBe(4);

    // no node on given index
    expect(list.at(10)).toBe(undefined);

    expect(emptyList.at(1)).toBe(undefined);
  });

  it("pops/removes the last item on the list, 'undefined' if list is empty", () => {
    for (let i = 2; i <= 5; i++) {
      list.append(i);
    }
    expect(list.pop()).toBe(1);
    expect(list.head()).toBe(2);

    expect(emptyList.pop()).toBe(undefined);
  });

  it("contains the given value", () => {
    for (let i = 2; i <= 5; i++) {
      list.append(i);
    }
    expect(list.contains(3)).toBe(true);
    expect(list.contains(10)).toBe(false);

    expect(emptyList.contains(5)).toBe(false);
  });

  //TODO: find
});
