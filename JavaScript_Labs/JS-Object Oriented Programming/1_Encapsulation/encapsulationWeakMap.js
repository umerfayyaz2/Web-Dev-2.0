const _privateData = new WeakMap();

class Counter {
  constructor() {
    _privateData.set(this, { value: 0 }); // Store private data in WeakMap
  }

  increment() {
    const data = _privateData.get(this);
    data.value++;
  }

  getValue() {
    const data = _privateData.get(this);
    return data.value;
  }
}

const counter = new Counter();
counter.increment();
counter.increment();
console.log(counter.getValue()); // Output: 2

// Attempting to access private data directly will fail
// console.log(_privateData.get(counter).value); // Requires access to _privateData