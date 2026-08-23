import { LinkedList } from "./linkedList";

class HashMap {
  constructor() {
    this.buckets = [];
    this.loadFactor = 0.75;
    this.capacity = 16;
    for (let index = 0; index < this.capacity; index++) {
      this.buckets[index] = new LinkedList();
    }
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }
  //TODO: Add linked list
  entry(bucket, key) {
    if (bucket < 0 || bucket >= this.capacity) {
      throw new Error("Trying to access index out of bounds");
    }

    if (bucket.contains(elem)) {
      return elem;
    }

    return null;
  }

  set(key, value) {
    let bucket = this.hash(key);
    let elem = this.entry(bucket, key);
    if (elem) {
      elem.value = value;
      return;
    }
    bucket.append(key, value);
  }
}
