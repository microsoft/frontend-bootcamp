# Step 2.5: Redux: Reducers

Redux is used inside many large and complex applications because of its clarity and its predictability. It is really easy to debug and is easily extensible via its middleware architecture. In this exercise, we'll explore the heart of how Redux modifies state.

Redux uses what is called a "reducer" to modify its state. It is called this because a "reducer" is what is used inside an `Array.reduce()`.

A reducer is a **pure function** that receives some state and an action message as inputs and generates a copy of modified state as the output. Redux manages state changes mainly through reducers, and they are directly related to the UI, so for this exercise, we'll have to use jest tests to see the inner workings.

From the official documentation site:

> Reducers are just pure functions that take the previous state and an action, and return the next state. Remember to return new state objects, instead of mutating the previous state.

# Exercise

1. First, take a look at the store interface in the `exercise/src/store/index.tsx` - note that the `Store` interface has two keys: `todos` and `filter`. We'll concentrate on the `todos` which is an object where the keys are IDs and the values are of an `TodoItem` type.

2. Open `exercise/src/reducers/pureFunctions.ts` and fill in the missing body of the pure functions.

3. Open `exercise/src/reducers/index.ts` and observe how those pureFunctions are called.

4. Open `exercise/src/reducers/pureFunctions.spec.ts` and implement tests for the functions you wrote for `remove`, `complete`, and `clear`.
