import FibConst, { fib } from './fibonacci';
import { Stack } from './stack';

console.log('hello world');

// ---- Modules ----
console.log('fib(FibConst) is:', fib(FibConst));

// ---- Types and Interfaces ----
type TrafficLight = 'red' | 'green' | 'yellow';
const annoyingLight: TrafficLight = 'red';

interface Car {
  wheels: number;
  color: string;
  make: string;
  model: string;
}

const myCar: Car = {
  wheels: 4,
  color: 'blue',
  make: 'Toyota',
  model: 'Camry'
};
// JSON.stringify makes a nice string representation of an object
console.log('My car:', JSON.stringify(myCar));

// ---- Generics ----
const myStack = new Stack<number>();
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log('Number on top of the stack:', myStack.pop());

// ---- Spread and Destructuring ----
const obj1 = {
  first: 'who',
  second: 'what',
  third: 'dunno',
  left: 'why'
};

const obj2 = {
  center: 'because',
  pitcher: 'tomorrow',
  catcher: 'today'
};

const megaObj = { ...obj1, ...obj2 };

const { first, second, catcher } = megaObj;
console.log('First:', first);
console.log('Second:', second);
console.log('Catcher:', catcher);

// ---- Async / Await ----
function makePromise(): Promise<number> {
  return Promise.resolve(5);
}

async function getGreeting(name: string): Promise<string> {
  return 'hello ' + name;
}

async function run() {
  const result = await makePromise();
  console.log('makePromise returned:', result);

  const greeting = await getGreeting('Ken');
  console.log('greeting:', greeting);
}

run();

// Make this file a module so its code doesn't go in the global scope
export {};
