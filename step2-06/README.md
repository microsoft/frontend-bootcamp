# Step 2.6 - Redux: Dispatching actions and examining state

[Lessons](../) | [Exercise](./exercise/) | [Demo](./demo/)

In this step, we learn about the Redux methods `dispatch()` and `getState()`. Dispatching action messages to the store is the only means by which to instruct the reducers to modify the shared state tree.

We also see how to compose reducers to make up the complete state shape.

## Dispatch

Given a store reference, you can dispatch an action to trigger the middleware and reducers. This changes the store and causes the view to re-render. (We'll look at how to pass the store and the dispatch function into the view later.)

```ts
const store = createStore(reducers);
store.dispatch(actions.addTodo('id0', 'hello world'));
```

> Important note: Dispatches generally have a "fire and forget" approach. We expect React to re-render the UI correctly of its own accord. (Rendering isn't necessarily synchronous in React! Chaining async action creators is a topic for Step 9.)

## Reducers scoped to a portion of the state tree

In general, when an application grows, so does the complexity of the state tree. In a Redux application, it is best to have reducers that deal with only a sub-portion of the tree.

In our example, we have two parts of our state: `todos` and `filter`. We will split the reducer to pass the todos to a `todosReducer()` function and just return `all` to the `filter` key for now. This organization helps in navigating and understanding the reducers because it matches the shape of the state one-to-one: there's a separate reducer for each key in state.

Compare this example which handles the whole state in one reducer...

```ts
// remember the shape of the store
{
  todos: {
    id0: {...},
    id1: {...},
  },

  filter: 'all'
}
```

...to this one which splits it up.

```ts
function reducers(state, action) {
  return {
    todos: function todoReducers(state['todos'], action) {
      ...
    },

    filter: function filterReducers(state['filter'], action) {
      ...
    }
  }
}
```

With the second example, it is easy to understand which reducer changed a given part of the state.

## `getState()`

To examine the state of the store, you can call `store.getState()` to get a snapshot of the current state.

In general, you should only store serializable things in the state so that you can easily save or transfer it. You can even save this state into a browser's local storage and restore for the next boot of your application!

## Visualizing the reducer and store change

If you want a really neat UI to show what the store looks when actions are dispatched to the store, use the [Redux DevTools extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd).

This extension (available for Chrome and Firefox) is a work of genius! It lets you replay actions and step backwards to debug the current state of a Redux application. In a large enough application, this kind of debuggability is invaluable. It also helps developers who are not familiar with your application to quickly get a handle on how the state changes in response to some actions.

# Exercise

## Visualize state changes with Chrome extension

If you still have `npm test` running from the previous step, stop it with `ctrl+C`. Start the app by running `npm start` from the root of the `frontend-bootcamp` folder. Click the "exercise" link under day 2 step 6.

1. Install the [Redux DevTools Chrome extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

2. Hit F12 (`cmd+option+I` on Mac) and open the inspector panel entitled **Redux**

3. Modify `exercise/src/index.tsx` to dispatch actions (you're not limited to adding todos; you can also remove and clear)

4. Explore the actions' effects using the extension

## Playing with dispatching actions inside tests

Stop the app using `ctrl+C` and start the tests by running `npm test`.

1. Open `exercise/src/reducers/reducer.spec.ts`

2. Follow the instructions to fill out the reducer tests
