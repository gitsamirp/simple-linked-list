export class Element {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class List {
  #head = null;

  constructor(values = []) {
    values.forEach(value => this.add(new Element(value)));
  }

  add(nextValue) {
    nextValue.next = this.#head;
    this.#head = nextValue;
  }

  get length() {
    let count = 0;
    let node = this.head;
    while (node) {
      count += 1;
      node = node.next;
    }
    return count;
  }

  get head() {
    return this.#head;
  }

  toArray() {
    const array = [];

    let node = this.head;
    while (node) {
      array.push(node.value);
      node = node.next;
    }

    return array;
  }

  reverse() {
    return new List(this.toArray());
  }
}
