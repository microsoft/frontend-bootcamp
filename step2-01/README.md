# Step 2.1: Introduction to TypeScript

[Lessons](../) | [Exercise](./exercise/) | [Demo](./demo/)

In this step, we'll cover enough of the TypeScript concepts to be productive with the React & Redux frameworks.

Topics in this step will include:

- ES modules
- Basic Types
- Interfaces & Classes
- Basic Generics
- Spread and Destructuring
- Async / Await

## Modules

Historically, JS is only executed in browser. The code all had to be loaded from `<script>` tags. Since the introduction of node.js, the JS community needed a way to scale beyond just single script files. Other language support the notion of modules. There are many JS modularity standards today.

The most important ones to know about are:

- commonjs - Node.js's standard to support modules
  - synchronous
  - require() function, can be dynamically called in the course of a program
- ESM (ECMAScript module) - language level support
  - statically analyzable and synchronous
  - dynamic and asynchronous support via `import()` that returns a promise

## TypeScript Types

Refer to the `demo/src` for some examples of some of the types available in TS that benefits a React developer.

## Spread Syntax

Spread syntax allows for quick way to clone and concatenate objects and arrays. This syntax is seen a lot inside React props and Redux reducers.

To shallow copy something:

```ts
const cloned = { ...obj };
```

To shallow copy and add / overwrite a key:

```ts
const overridden = { ...obj, key: value };
```

You can have an expression to calculate this key if it is dynamic:

```ts
const overridden = { ...object, [key + '-suffix']: value };
```

## Destructuring

Destructuring is a concise way to take properties out of an object or array:

```ts
const obj = { foo: 1, bar: 2 };
const { foo, bar } = obj;
// foo = 1, bar = 2
```

Same thing for array:

```ts
const arr = [1, 2];
const [foo, bar] = arr;
// foo = 1, bar = 2
```

You can separate an item and the rest of the object with destructuring:

```ts
const obj = { a: 1, b: 2, c: 3, d: 4 };
const { a, ...rest } = obj;
// a = 1, rest = {b: 2, c: 3, d: 4}
```

# Promise

A promise is an object that represent work that will be completed later, asynchronously. It is a chainable so writing async code is maintainable. Typically legacy async code uses callback to let the caller have control over what to do after the task has been completed.

```ts
const aPromise = new Promise((resolve, reject) => {
  // do something async and call resolve() to let promise know it is done

  setTimeout(() => {
    // setTimeout will call this method after 1s, simulating async operation like network calls
    resolve();
  }, 1000);
});
```

The promise object exposes a `then()` function that is chainable. `catch()` is present that catches all exceptions or `reject()` calls:

```ts
const aPromise = Promise.resolve('hello world'); /* ... just an example promise */

aPromise
  .then(result => {
    return makeAnotherPromise();
  })
  .then(result => {
    return makeYetAnotherPromise();
  })
  .catch(err => {
    console.error(err);
  });
```

# Async / Await

This syntax is inspired heavily by C#'s async / await syntax. To write an async function write it like this:

```ts
async function someFunctionAsync() {
  // Inside here, we can await on other async functions
  const result = await someOtherFunctionAsync();
  return result + ' hello';
}
```

All functions that are marked `async` return a `Promise` automatically. This previous example returned a `Promise<string>`, and can be used like this:

```ts
someFunctionAsync().then(result => {
  console.log(result);
});
```

# Exercise

Please complete all exercises inside the `exercise/src` folder unless otherwise specified in the exercises below. First, open up [Step2-01 exercise page](http://localhost:8080/step2-01/exercise/) to see the results while you're implementing things.

## Modules

1. Open up file called `index.ts` in VS Code

2. Create another module file called `fibonacci.ts`

3. Inside the file from (step 2), write a function called `fib(n)` that takes in a number and returns a the n-th Fibonacci number - be sure the specify the type of n

> HINT: function fib(n: number) { return n <= 1 ? n : fib(n - 1) + fib(n - 2); }

4. Export `fib(n)` as a **named export**

5. Export another const variable as a **default export**

6. Inside `index.ts` Import both the modules created in steps (4) and (5) and use the built-in `console.log()` function to log the result of `fib(FibConst)`.

## Types, Interfaces, and Classes

Inside `index.ts`:

1. Add a type alias for string union type describing the states of Red-Green-Yellow traffic light: `type TrafficLight = ???`

2. Describe a type of car with an interface: `interface Car { ... }` complete with `wheels`, `color`, `make`, `model`

## Generic

Inside `stack.ts`, create a generic class for a `Stack<T>` complete with a typed `pop()` and `push()` methods

> Hint: the JavaScript array already has `push()` and `pop()` implemented for you. That can be your backing store.

Be sure to use the built-in `console.log()` to show the functionality of `Stack<T>`

## Spread and Destructure

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

2. Now create a one-liner using the spread syntax `{...x, ...y}` to create a new variable that combines these two objects.

3. Using the destructuring syntax to retrieve the values for `{first, second, catcher}` from this new object created in step (2).

## Async / Await

1. Note the following code in index.ts:

```ts
function makePromise() {
  return Promise.resolve(5);
}
```

2. call `makePromise()` with the `await` syntax and log the results using the provided `log()` function

3. create a new function that uses the `async` keyword to create an async function. Make an await call to `makePromise()` and return the results
