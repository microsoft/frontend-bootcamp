# Step 2.5: Redux: Reducers

[Lessons](../) | [Exercise](./exercise/) | [Demo](./demo/)

# Discussion on Flux

Ideally React gives us a mental model of:

```
f(data) => view
```

This is fine if the data never changes. However, React exists to deal with data updates via props (immutable) and state (changes based on `setState()` API). In the real world, data is shaped like a tree and view is shaped like a tree. They don't always match.

Facebook invented a the Flux pattern to solve this shared state issue. Redux is an implementation of the Flux architectural pattern. Redux expects the data to be a singleton state tree that listens for messages to manipulate the state as appropriate:

![Flux Diagram](../assets/flux.png)

## View

These are the React Components that consume the store as its data. There is a special way Redux will map its data from the state tree into the different React Components. The Components will know to re-render when these bits of state are changed.

## Action

Actions are messages that represent some event, such as a user's action or a network request. With the aid of _reducers_, they affect the overall state.

## Store

This is a singleton state tree. The state tree is immutable and needs to be re-created at every action. This helps connected views to know when to update itself - just doing a simple reference comparison rather than a deep comparison.

## Reducers

These are simple stateless, pure functions that takes state + action message and returns a copy of state some modifications according to the action message type and payload.

## Dispatcher

There is a single dispatcher. It simply informs of the store of all the actions that needs to be performed. Certain middleware can be applied to the store and the dispatcher's job is to dispatch the message through all the middleware layers.

Redux is used inside many large and complex applications because of its clarity and its predictability. It is really easy to debug and is easily extensible via its middleware architecture. In this exercise, we'll explore the heart of how Redux modifies state.

Redux uses what is called a "reducer" to modify its state. It is called this because a "reducer" is what is used inside an `Array.reduce()`.

A reducer is a **pure function** that receives some state and an action message as inputs and generates a copy of modified state as the output. Redux manages state changes mainly through reducers, and they are directly related to the UI, so for this exercise, we'll have to use jest tests to see the inner workings.

From the official documentation site:

> Reducers are just pure functions that take the previous state and an action, and return the next state. Remember to return new state objects, instead of mutating the previous state.

**Mental Model**: think of Reducer as part of the store and should have no side effects outside of defining how data can change from one state to next given action messages.

# Getting Started with Redux

We begin the journey into Redux by looking at the store. The store consists of several parts

1. the state or the data - we represent this both with an initial state and with a TypeScript interface.
2. the reducer - responsible for reacting to action messages to change the state from a previous to the next state.
3. the dispatcher - there is only one dispatcher and the store exports this. We'll look at this in Step 6!

## Create Store

The `createStore()` takes in several arguments. The simplest form just takes in reducers. Reducers are the means by which the state changes from one snapshot to another.

```ts
const store = createStore(reducer);
```

`createStore()` can take in an initial state - the initial state can come from any source. There are two use cases:

1. load initial data from an API server
2. load data that is generated from a server side rendering environment

```ts
const store = createStore(reducer, {
  /* the initial state */
});
```

`createStore()` also takes in a third argument that injects **middleware**. From the documentation site:

> [Redux Middleware] provides a third-party extension point between dispatching an action, and the moment it reaches the reducer.

## Reducers

Remember that the reducers are **pure**. Pure functions have no side effects. They always return the same output given the same input (idempotent). They are easily testable.

Reducers' only job is to change the state from one snapshot to another. They are simple functions that take in the state and an action message. These reducers looks at the action message to decide what to do to the state. A convention that has been established in the Flux community is the `type` key in the action message. Another convention is using switch statements against the `type` key to trigger further reducer functions.

```ts
function reducer(state: Store['todos'], payload: any): Store['todos'] {
  switch (payload.type) {
    case 'addTodo':
      return addTodo(state, payload.id, payload.label);
  }

  return state;
}
```

In these demo and exercises, I separated out the pure & reducer functions to make it cleaner. The tests inside `pureFunctions.spec.ts` should describe the behavior of the individual functions. They are easy to follow and easy to write.

# Exercise

1. First, take a look at the store interface in the `exercise/src/store/index.tsx` - note that the `Store` interface has two keys: `todos` and `filter`. We'll concentrate on the `todos` which is an object where the keys are IDs and the values are of an `TodoItem` type.

2. Open `exercise/src/reducers/pureFunctions.ts` and fill in the missing body of the pure functions.

3. Open `exercise/src/reducers/index.ts` and fill in the missing case statements for the switch of `action.type`.

4. Open `exercise/src/reducers/pureFunctions.spec.ts` and implement tests for the functions you wrote for `remove`, `complete`, and `clear`.
