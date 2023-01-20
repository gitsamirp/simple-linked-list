export class Element {
  #value = null;
  #next = null;

  constructor(value) {
    this.#value = value;
    this.#next = null;
  }

  get value() {
    return this.#value;
  }

  set value(newValue) {
    this.#value = newValue;
  }

  get next() {
    return this.#next;
  }

  set next(next) {
    this.#next = next;
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
