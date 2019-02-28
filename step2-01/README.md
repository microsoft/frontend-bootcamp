# Step 2.1: Introduction to TypeScript

[Lessons](../) | [Exercise](./exercise/) | [Demo](./demo/)

In this step, we'll cover enough TypeScript concepts to be productive with the React & Redux frameworks.

Topics in this step will include:

- [ES modules](#modules)
- [Types](#typescript-types)
- [Spread](#spread-operator) and [Destructuring](#destructuring)
- [Promise](#promise) and [Async / Await](#async--await)

> To try out TypeScript concepts and see the corresponding JavaScript, you can use the [TypeScript playground](http://www.typescriptlang.org/play/index.html). We won't be using it in this training, but it's very handy in general!

## Modules

Historically, JS was only executed in-browser. The code all had to be loaded using `<script>` tags. With the introduction of node.js, the JS community needed a way to scale beyond just single script files. Other languages support the notion of modules, so various groups started developing modularity standards for JS.

The most important ones to know about are:

- **commonjs** - Node.js's standard to support modules
  - synchronous loading using `require()` function
  - `require()` can be dynamically called in the course of a program
- **ESM (ECMAScript module)** - language-level support
  - statically analyzable and synchronous
  - dynamic and asynchronous support via `import()` that returns a promise

> For more information about the *many* modularity patterns and standards developed over time, see [this article](https://medium.freecodecamp.org/javascript-modules-a-beginner-s-guide-783f7d7a5fcc). You may still encounter some of the older patterns in legacy code.

## TypeScript Types

Refer to [`demo/src`](./demo/src) for examples of some of the types available in TS that benefit a React developer.

## Spread Operator

The spread operator `...` provides a quick way to clone and concatenate objects and arrays. This syntax is seen a lot inside React props and Redux reducers.

With objects:

```ts
// Shallow copy an object
const cloned1 = { ...obj };

// Shallow copy and add/overwrite a key
const overridden1 = { ...obj, key: value };

// Shallow copy multiple objects and add a key
const cloned2 = { ...obj1, ...obj2, key: value };

// Use an expression to calculate a key dynamically
const overridden = { ...object, [key + '-suffix']: value };
```

With arrays:

```ts
const copy1 = [...arr];
const copy2 = [...arr1, ...arr2];
const copyWithExtras = [123, ...arr, 'hello'];
```

Spreading an array into positional arguments to a function:

```ts
function myFunc(a: number, b: number, c: number) {
  // ...
}
const arr = [1, 2, 3];
myFunc(...arr);
```

Spreading an object into props for a React component:

```tsx
const obj = { a: 1, b: 2, c: 3 };
// equivalent to:
// <MyComponent a={obj.a} b={obj.b} c={obj.c} />
const rendered = <MyComponent {...obj} />;
```

## Destructuring

Destructuring is a concise way to take properties out of an object or array:

```ts
const obj = { foo: 1, bar: 2 };
const { foo, bar } = obj;
// foo = 1, bar = 2

const arr = [1, 2];
const [foo, bar] = arr;
// foo = 1, bar = 2
```

You can separate an item from the rest of the object with destructuring:

```ts
const obj = { a: 1, b: 2, c: 3, d: 4 };
const { a, ...rest } = obj;
// a = 1, rest = {b: 2, c: 3, d: 4}

const arr = [1, 2, 3];
const [foo, ...bar] = arr;
// foo = 1, bar = [2, 3]
```

## Promise

A promise is an object representing work that will be completed later, asynchronously. Promises are chainable, which helps with writing maintainable async code. (Typically, legacy async code uses callbacks to let the caller have control over what to do after the task has been completed, which becomes very hard to read.)

```ts
const aPromise = new Promise((resolve, reject) => {
  // do something async and call resolve() to let promise know it is done
  setTimeout(() => {
    // setTimeout will call this method after 1s, simulating async operation like network calls
    resolve();
  }, 1000);
});
```

Each promise instance exposes a `then()` function that is chainable. It also provides `catch()`, which catches all exceptions or `reject()` calls:

```ts
// Promise.resolve() creates an already-resolved promise instance
const aPromise = Promise.resolve('hello world');

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

> For more information, see [this overview of promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises) or [this deep dive](https://developers.google.com/web/fundamentals/primers/promises).

## Async / Await

This syntax is inspired heavily by C#'s async / await syntax. An async function is written like this:

```ts
async function someFunctionAsync() {
  // Inside here, we can await on other async functions
  const result = await someOtherFunctionAsync();
  return result + ' hello';
}
```

All functions that are marked `async` return a `Promise` automatically. The previous example returned a `Promise<string>`, and can be used like this:

```ts
someFunctionAsync().then(result => {
  console.log(result);
});
```

> For more information, see [this article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function).

# Exercise

Exercises will be completed under this step's `exercise/src` folder unless otherwise noted. You'll also want to open the [Step2-01 exercise page](http://localhost:8080/step2-01/exercise/) to see the results as you work.

## Modules

1. Open the file `exercise/src/index.ts` in VS Code

2. Create another module file called `fibonacci.ts`

3. Inside the file from (step 2), write a function called `fib(n)` that takes in a number and returns the `n`-th Fibonacci number (be sure the specify the type of `n`).

> HINT: `function fib(n: number) { return n <= 1 ? n : fib(n - 1) + fib(n - 2); }`

4. Export `fib(n)` as a **named export**

5. Export another const variable as a **default export**

6. Inside `index.ts`, import both of the modules created in steps (4) and (5) and use the built-in `console.log()` function to log the result of `fib(FibConst)`.

## Types and Interfaces

Inside `index.ts`:

1. Add a type alias for string union type describing the states of Red-Green-Yellow traffic light: `type TrafficLight = ???`

2. Describe a type of car with an interface: `interface Car { ... }` complete with `wheels`, `color`, `make`, `model`

## Generics

Inside `stack.ts`, create a generic class for a `Stack<T>` complete with a typed `pop()` and `push()` methods.

> Hint: the JavaScript array already has `push()` and `pop()` implemented for you. That can be your backing store.

Be sure to use the built-in `console.log()` to show the functionality of `Stack<T>`.

## Spread and Destructuring

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

3. Use the destructuring syntax to retrieve the values for `{first, second, catcher}` from the new object created in step (2).

## Async / Await

Note the following code in index.ts:

```ts
function makePromise() {
  return Promise.resolve(5);
}
```

1. Call `makePromise()` with the `await` syntax and log the results using the provided `log()` function.

2. Create a new function that uses the `async` keyword. Make an `await` call to `makePromise()` and return the results.
