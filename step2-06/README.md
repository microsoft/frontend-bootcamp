# Step 2.6

[Lessons](../) | [Exercise](./exercise/) | [Demo](./demo/)

Redux: Dispatching Actions and Examining State.

In this step, we learn about `dispatch` and `getState()`. Dispatching action messages to the store is the only means by which to inform the reducers to modify the shared state tree.

We also see how we may compose the reducers according to the shape.

If you want a really neat UI to show what the store looks when actions are dispatched to the store, use this Chrome extension:
https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd

# Dispatch

As long as there is a store reference, you can dispatch an action to trigger the middleware and reducers which in term changes the store which in turn will cause re-renders in the view.

```ts
store.dispatch(actions.addTodo('id0', 'hello world'));
```

> Note: It is important to note that dispatches in general have a "fire and forget" approach. We expect React to re-render the UI correct on its own accord. Rendering isn't necessarily synchronous in React!

# `getState()`

To examine the state of the store, you can call `getState()` to get the current snapshot of the state.

```ts
store.getState();
```

The Chrome / Firefox extension is a work of genius! It lets you replay actions and step backwards to debug the current state of Redux. In a large enough application, this kind of debuggability is invaluable! It also helps developers that are not immediately familiar with your application to quickly get a handle on how the state changes over some actions.

# Exercise

## Visualize the state changes with Chrome extension

1. Install [Chrome extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

2. Open the inspector panel entitled **Redux**

3. Modify `exercise/src/index.tsx` to dispatch actions

## Playing with dispatching actions inside tests

1. open the `exercise/src/reducers/reducer.spec.ts`

2. Follow the instructions to fill out the reducer tests

3. Run the tests with `npm test`
