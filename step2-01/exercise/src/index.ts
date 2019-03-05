// TODO: import the fib(n) function and the constant from './fibonacci.ts'
// import FibConst, {fib} from ...

// TODO: import Stack from ...

// Do the exercises here, outputting results using console.log()
console.log('hello world');

// ---- Modules ----

// TODO: log the result of fib(FibConst)

// ---- Types and Interfaces ----

// TODO: define TrafficLight type
// type TrafficLight = ???

// TODO: define Car interface
// interface Car { ??? }

// TODO: create Car instance
// const myCar: Car = { ??? }

// ---- Generics ----

// TODO: Demonstrate the Stack
// const myStack: Stack<number> = ???

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

// TODO: combine obj1 and obj2 into a single object megaObj using spread syntax
// const megaObj = ???

// TODO: use destructuring syntax to extract { first, second, catcher }

// ---- Async / Await ----
function makePromise() {
  return Promise.resolve(5);
}

// TODO: create a new async function

async function run() {
  // TODO: call makePromise() using await syntax and log the results
  // TODO: call your new async function
}

run();

// Make this file a module so its code doesn't go in the global scope
export {};
