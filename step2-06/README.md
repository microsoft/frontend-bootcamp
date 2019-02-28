# Step 2.6

[Lessons](../) | [Exercise](./exercise/) | [Demo](./demo/)

Redux: Dispatching Actions and Examining State.

In this step, we learn about `dispatch` and `getState()`. Dispatching action messages to the store is the only means by which to inform the reducers to modify the shared state tree.

We also see how we may compose the reducers according to the shape.

# Dispatch

As long as there is a store reference (we'll look at how to pass the store and the dispatch function into the view later), you can dispatch an action to trigger the middleware and reducers which in term changes the store which in turn will cause re-renders in the view.

```ts
const store = createStore(redcuers);
store.dispatch(actions.addTodo('id0', 'hello world'));
```

> Note: It is important to note that dispatches in general have a "fire and forget" approach. We expect React to re-render the UI correct on its own accord. Rendering isn't necessarily synchronous in React! Chaining async action creators is a topic for Step 9

# Reducers scoped to a portion of the state tree

In general, when an application grows so does the complexity of the state tree. In a Redux application, it is best to have reducers that deal with only a subportion of the tree. In our example, we have two parts of our state: `todos` and `filter`. We will split the reducer to pass the todos to a `todosReducer()` function and just return `all` to the `filter` key for now. This reducer organization helps in navigating the reducers because it matches the shape of the state one to one.

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

Compare this with the reducer organization

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

In this way, it is very predictable which reducer changed the part of the state.

# `getState()`

To examine the state of the store, you can call `getState()` to get the current snapshot of the state.

```ts
store.getState();
```

## Discussion

`getState()` will return a snapshot of the current state. The guidance is that we don't store anything other than serializable things here so that you can easily save it and transfer it. You can even save this state into a browser localstorage and restore for the next boot of your application!

# Visualizing the Reducer and Store Change

If you want a really neat UI to show what the store looks when actions are dispatched to the store, use this Chrome extension:

https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd

The Chrome / Firefox Redux dev tools extension is a work of genius! It lets you replay actions and step backwards to debug the current state of Redux. In a large enough application, this kind of debuggability is invaluable. It also helps developers that are not immediately familiar with your application to quickly get a handle on how the state changes over some actions.

# Exercise

If you still have `npm test` running from the previous step, stop it with `ctrl+C`. Start the app by running `npm start` from the root of the `frontend-bootcamp` folder. Click the "exercise" link under day 2 step 6 to see results.

## Visualize the state changes with Chrome extension

1. Install [Chrome extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

2. Hit F12, open the inspector panel entitled **Redux**

3. Modify `exercise/src/index.tsx` to dispatch actions (you're not limited to adding, you can also remove, and clear)

## Playing with dispatching actions inside tests

1. open the `exercise/src/reducers/reducer.spec.ts`

2. Follow the instructions to fill out the reducer tests

3. Run the tests with `npm test`
