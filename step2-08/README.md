# Step 2.8

[Lessons](../) | [Exercise](./exercise/) | [Demo](./demo/)

At this point, you might asking why am I adding so much boilerplate code?!?!

<details>
<summary>It's okay. Don't be cry.</summary>
<img src="https://media.giphy.com/media/eveLVPcHcbl0A/giphy.gif" />
</details>

A lot of code seems to be repeated with Redux. Redux is very much function based and has a lot of opportunites for some refactoring to make it less boilerplate'ish.

I argue that part of the boilerplate is just turning what would otherwise by implicit to be explicit. This is GOOD in a large applications so that there is no magic.

However, I argue for two things to make things much better:

1. writing against immutable data structures is hard
2. the switch statements is cumbersome and error prone (e.g. with default case missing)

# `redux-starter-kit`: A simple batteries-included toolset to make using Redux easier

Introducing an official library from Redux team that makes this much better. We'll start with `createReducer()`

## `createReducer()`: takes away the switch statement

`createReducers()` simplifies things a lot! The best way illustrate what it does is with some code:

```ts
function todoReducer(state, action) {
  switch (action.type) {
    case 'addTodo':
      return addTodo(...)

    case 'remove':
      return remove(...)

    case 'clear':
      return clear(...)

    case 'complete':
      return complete(...)
  }

  return state;
}
```

can be rewritten as:

```ts
import {createReducer} from 'redux-starter-kit';

const todoReducer = createReducer({}, {
  addTodo: (state, action) => ...,
  remove: (state, action) => ...,
  clear: (state, action) => ...,
  complete: (state, action) => ...
})
```

Several important features of `createReducer()`:

1. it allows a more concise way of writing reducers with keys that match the `action.type` (using convention)

2. handles "no match" case and returns the previous state (rather than a blank state like we had done previously)

3. it incorporates a library called [`immer`](https://github.com/mweststrate/immer#reducer-example) that allows us to write code that mutates a draft object and ultimately copies over the old snapshot with the new. Instead of writing immutable data manipulation:

```ts
// Taken from: https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns#inserting-and-removing-items-in-arrays
function insertItem(array, action) {
  return [...array.slice(0, action.index), action.item, ...array.slice(action.index)];
}

function removeItem(array, action) {
  return [...array.slice(0, action.index), ...array.slice(action.index + 1)];
}
```

Can become code that we write with mutable arrays (without spread syntax):

```ts
function insertItem(array, action) {
  // splice is a standard JS Array function
  array.splice(action.index, 0, action.item);
}

function removeItem(array, action) {
  array.splice(action.index, 1);
}
```

There are cases where you need to replace the entire state at a time (like the `setFilter`). Simply returning a new value without modifying the state like so:

```ts
function setFilter(state, action) {
  return action.filter;
}
```

## `combineReducer()` - combining reducers

This another is demonstration of how to write reducers with less boilerplate code. We can use a built-in `redux` function to combineReducers. Application state shape grows usually be splitting the store. Our Redux store so far has this shape, roughly:

```js
const state = {
  todos: {
    id0: {
      label: 'hello',
      completed: false
    },
    id1: {
      label: 'world',
      completed: true
    }
  },

  filter: 'all'
};
```

Currently, the store captures two separate but related ideas: the todo items and the selected filter. The reducers should follow the shape of the store. Think of reducers as part of the store itself and are responsible to update a single part of the store based on actions that they receive as a second argument. As complexity of state grows, we split these reducers:

```ts
// from last step, using createReducer
const todoReducer = createReducer(
  {},
  {
    // reduce on the todos part of the state tree
  }
);

const filterReducer = createReducer('all', {
  // reduce on the filter flag
});

// Then use the redux-provided combineReducers() to combine them
export const reducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer
});
```

`combineReducers` handles the grunt-work of sending _actions_ to each combined reducer. Therefore, when an action arrives, each reducer is given the opportunity to modify its own state tree based on the incoming action.

# Exercise

> Hint! This section is tricky, so all the solution is inside "demo" as usual. Feel free to copy & paste if you get stuck!!

1. open up `exercise/src/reducers/index.ts`

2. rewrite the reducer functions `todoReducers`, `filterReducers` with the help of `createReducer()`

3. rewrite the `reducer()` function with `combineReducer()`

4. open up `exercise/src/reducers/pureFunctions.ts`

5. rewrite all the reducers related to the todos by following instructions

# Further reading

- immer: https://github.com/mweststrate/immer - improves ergonomics of working with immutables by introducing the concept of mutating a draft

- redux-starter-kit: https://github.com/reduxjs/redux-starter-kit - help address common concerns of Redux in boilerplate and complexity
