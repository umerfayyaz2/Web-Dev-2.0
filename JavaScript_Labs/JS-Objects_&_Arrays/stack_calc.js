let stack = [];

function push(value) {
  stack.push(value);
}

function pop() {
  if (stack.length === 0) {
    console.log("Stack is empty!");
    return;
  }
  return stack.pop();
}

function peek() {
  return stack[stack.length - 1];
}

push(10);
push(20);
console.log(pop()); // → 20
console.log(peek()); // → 10
console.log(pop()); // → 10
console.log(pop()); // → Stack is empty!