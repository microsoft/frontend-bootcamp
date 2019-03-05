# Step 2.1 - Introduction to TypeScript (Exercise)

[Lessons](../../) | [Demo](../demo/) | [Final](../final/)

If you don't already have the app running, start it by running `npm start` from the root of the `frontend-bootcamp` folder.

Exercises will be completed under this step's `exercise/src` folder unless otherwise noted. You'll also want to open the [Step2-01 exercise page](http://localhost:8080/step2-01/exercise/) to see the results as you work.

## Modules

1. Open the file `exercise/src/fibonacci.ts` in VS Code

2. Inside this file, write a function called `fib(n)` that takes in a number and returns the `n`-th Fibonacci number (be sure the specify the type of `n`).

> HINT: `function fib(n: number) { return n <= 1 ? n : fib(n - 1) + fib(n - 2); }`

3. Export `fib(n)` as a **named export**

4. Export a const variable `FibConst` as a **default export**

5. Inside `index.ts` in the same folder, import both `fib` and `FibConst`, and use the built-in `console.log()` function to log the result of `fib(FibConst)`.

## Types and interfaces

Inside `exercise/src/index.ts`:

1. Add a type alias for string union type describing the states of Red-Green-Yellow traffic light: `type TrafficLight = ???`

2. Describe a type of car with an interface: `interface Car { ... }` complete with `wheels`, `color`, `make`, `model`

3. Create a valid car instance and log it using `console.log()`: `const myCar: Car = { ??? }`;

## Generics

Inside `exercise/src/stack.ts`, create a generic class for a `Stack<T>` complete with a typed `pop()` and `push()` methods.

> Hint: the JavaScript array already has `push()` and `pop()` implemented for you. That can be your backing store.

In `exercise/src/index.ts`, create a `Stack<number>` and use `console.log()` to demonstrate its functionality.

## Spread and destructuring

1. Note the following code in index.ts:

```ts
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
```

2. Now create a one-liner using the spread syntax `{...x, ...y}` to create a new variable `megaObj` that combines these two objects.

3. Use the destructuring syntax to retrieve the values for `{first, second, catcher}` from `megaObj`.

## Async / await

Note the following code in index.ts:

```ts
function makePromise() {
  return Promise.resolve(5);
}
```

1. Call `makePromise()` with the `await` syntax and log the results.

2. Create a new function that uses the `async` keyword. Inside the function, make an `await` call to `makePromise()` and return the results.
