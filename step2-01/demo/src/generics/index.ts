// Generics for classes
class Stack<T = number> {
  private data: T[] = [];

  push(item: T) {
    this.data.push(item);
  }
  pop(): T {
    return this.data.pop();
  }
}

const numberStack = new Stack();
const stringStack = new Stack<string>();

// Generics for functions
function reverse<T>(arg: T[]): T[] {
  // TODO: implement the logic to reverse the array
  return arg;
}

// adding an export turns this into a "module"
export default {};
