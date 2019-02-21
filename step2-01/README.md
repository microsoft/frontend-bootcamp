# Step 2.1: Introduction to Typescript

In this step, we'll cover enough of the Typescript concepts to be productive with the React & Redux frameworks.

Topics in this step will include:

- ES modules
- Basic Types
- Interfaces & Classes
- Basic Generics
- Spread and Destructuring
- Async / Await

Have a look at the `demo/src/` files to get a sense of what those are

# Exercise

Please complete all exercises inside the `exercise/src` folder unless otherwise specified in the exercises below. First, open up [Step2-01 exercise page](http://localhost:8080/step2-01/exercise/) to see the results while you're implementing things.

## Modules

1. Open up file called `index.ts` in VS Code

2. Create another module file called `fibonacci.ts`

3. Inside the file from (step 2), write a function called `fib(n)` that takes in a number and returns a the n-th Fibonacci number - be sure the specify the type of n

> HINT: fib(n) = fib(n - 1) + fib(n - 2); fib(n <= 1) = n;

4. Export `fib(n)` as a **named export**

5. Export another const variable as a **default export**

6. Import both the modules created in steps (4) and (5) and use the provided `log()` function to log it onto the page.

## Types, Interfaces, and Classes

Create inside `index.ts`:

1. a type alias for string union type describing the states of Red-Green-Yellow traffic light

2. a class hierarchy of your favorite metaphor (e.g. family, autombiles, animals)

3. describe an object type with an interface

## Generic

Inside `index.ts`, create a generic class for a `Stack<T>` complete with a typed `pop()` and `push()` methods

Hint: the Javascript array already has `push()` and `pop()` implemented for you. That can be your backing store.

Be sure to use the provided `log()` to show the functionality of `Stack<T>`

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
