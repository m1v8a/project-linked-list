const LinkedList = require("./index.js");

let list = null;
beforeEach(() => {
  list = new LinkedList();

  for (let i = 1; i <= 5; i++) {
    list.append(i);
  }

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
    expect(list.size()).toBe(5);

    list.append(25);
    expect(list.size()).toBe(6);

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
    expect(list.at(1)).toBe(2);
    expect(list.at(3)).toBe(4);

    // no node on given index
    expect(list.at(10)).toBe(undefined);

    expect(emptyList.at(1)).toBe(undefined);
  });

  it("pops/removes the last item on the list, 'undefined' if list is empty", () => {
    expect(list.pop()).toBe(1);
    expect(list.head()).toBe(2);

    expect(emptyList.pop()).toBe(undefined);
  });

  it("contains the given value", () => {
    expect(list.contains(3)).toBe(true);
    expect(list.contains(10)).toBe(false);

    expect(emptyList.contains(5)).toBe(false);
  });

  it("returns the index of the given value if it exist, '-1' if the value can't be found", () => {
    expect(list.findIndex(1)).toBe(0);
    expect(list.findIndex(2)).toBe(1);
    expect(list.findIndex(3)).toBe(2);
    expect(list.findIndex(4)).toBe(3);
    expect(list.findIndex(5)).toBe(4);

    // value can't be found
    expect(list.findIndex(22)).toBe(-1);
  });

  it("prints the linked list", () => {
    const linkList = "( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) -> ( 5 ) -> ( null )";
    expect(list.toString()).toEqual(linkList);

    list.append(6);
    const linkList2 =
      "( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) -> ( 5 ) -> ( 6 ) -> ( null )";
    expect(list.toString()).toEqual(linkList2);
  });
  it("insert a value at the given index, create null valued nodes to fill the list if the given index is greater than the size", () => {
    list.insertAt(3, 6);
    list.insertAt(5, 7);
    expect(list.at(3)).toBe(6);
    expect(list.at(5)).toBe(7);

    // given index greater than the list size
    list.insertAt(8, 8);
    console.log(list.toString());
    expect(list.at(7)).toBe(null);
    expect(list.at(8)).toBe(8);
  });
});
