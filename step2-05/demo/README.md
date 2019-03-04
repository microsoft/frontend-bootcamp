# Step 2.5 - Redux: The Store (Demo)

[Lessons](../) | [Exercise](./exercise/) | [Demo](./demo/)

In this step, we will look at solving the problems of complex application (as mentioned in Step 4) with a library called Redux.

1. Introduction to Redux
2. Why Use Redux?
3. Creating the Redux store
4. Writing reducers
5. Dispatching actions

---

## Introduction to Redux

As a reminder, the problem that we want to address are:

1. Data needs to be passed down from component to component via props. Even when some components do not need to know about some data.
2. Shared data can be changed by various actors (user interaction, updates from server), and there is no coordination of these changes

Redux is an implementation of the Flux architectural pattern:

![Flux Diagram](../assets/flux.png)

### View

A view is a React component that consumes the store as its data.

### Action

[Actions](https://redux.js.org/basics/actions) are serializable JSON messages that represent some event, such as a user's action or a network request. With the aid of _reducers_, they affect the overall state. At the minimum, it should contain a `type` key. Sometimes it contains additional data as a _payload_.

### Store

The [store](https://redux.js.org/basics/store) consists of a **state tree**, a **dispatcher**, and **reducers**.

1. The **state tree** is a _singleton_, _serializable_, _immutable_ nested json data. It is updated from one snapshot to another through `reducers`.

2. The **dispatcher** accepts actions passing them to the reducers.

3. **Reducers** are functions that take in the current state tree and an action, producing the next snapshot of the state tree. This is the only way to update the state tree.

## Why Use Redux?

There are lots of alternatives available, but here are some really good reasons to go with Redux:

1. For more complex applications, Flux pattern forces code to be written in a way that is easy to reason about
2. There maybe a need to serialize the application state to be transmitted across the wire somehow
3. Dev tooling is really amazing
4. Popularity of the framework means the ecosystem is mature at this point

# Creating the Redux store

The [`createStore()`](https://redux.js.org/api/createstore) function is provided by Redux to create a store. In general, an application would just have one single store. It takes in the reducer and an initial snapshot of the state tree.

```ts
const store = createStore(reducer, initialState);
```

# Writing Reducers

We will write our reducers with the help of some utilities from the official `redux-starter-kit`. Here is how we will write our reducers:

## 1. Organize reducers according to the keys of the state tree object:

```ts
import { createReducer } from 'redux-starter-kit';

const todosReducer = createReducer({}, {
  // first argument is the initial state
  // second argument is an object where the keys corresponds to the "action.type"
  addTodo: (state, action) => ...
});

const filterReducer = createReducer('all', {
  setFilter: (state, action) => ...
});

const reducer = combineReducer({
  todos: todosReducer,
  filter: filterReducer
})
```

## 2. Write the reducers with mutables.

`createReducer()` will automatically translate all the mutations to the state into immutable snapshots (!!!!!):

```ts
const todosReducer = createReducer(
  {},
  {
    // first argument is the initial state
    // second argument is an object where the keys corresponds to the "action.type"
    addTodo: (state, action) => {
      state[action.id] = { label: action.label, completed: false };
    }
  }
);
```

# Dispatching Actions

Dispatching action will pass the action and the current state to the _reducers_. The root _reducer_ will produce a new snapshot for the entire state tree. We can inspect the affected snapshot with the help of `getState()`.

```ts
const store = createStore(reducer, initialState);
store.dispatch({ type: 'addTodo', label: 'hello' });
store.dispatch({ type: 'addTodo', label: 'world' });
console.log(store.getState());
```

Creating these action messages by hand is tedious, so we use action creators to do that:

```ts
const actions = {
  addTodo = (label: string) => ({ label, id: nextId(), completed: false })
};

store.dispatch(actions.addTodo('hello'));
```
