# Step 2.8: Reduce Boilerplate (Demo)

[Lessons](../) | [Exercise](./exercise/) | [Demo](./demo/)

At this point, you might asking why am I adding so much boilerplate code?

<details>
<summary>It's okay. Don't be cry.</summary>
<img src="https://media.giphy.com/media/eveLVPcHcbl0A/giphy.gif" />
</details>

A lot of code seems to be repeated with Redux. Redux is very much function-based and has a lot of opportunities for some refactoring to make it less boilerplate-heavy.

I argue that part of the boilerplate is just making things explicit that would otherwise be implicit. This is GOOD in a large application so that there is no magic.

However, I argue that there are two major areas for improvement:

1. Writing against immutable data structures is hard
2. The switch statements are cumbersome and error-prone (e.g. with default case missing)

## `redux-starter-kit`: A simple batteries-included toolset to make using Redux easier

Introducing [`redux-starter-kit`](https://redux-starter-kit.js.org/), an official helper library from Redux team, makes this much better. We'll start with `createReducer()`.

### `createReducer()`: takes away the switch statement

[`createReducer()`](https://redux-starter-kit.js.org/api/createreducer) simplifies things a lot! The best way illustrate what it does is with some code. Previously, we'd write our reducer like this:

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

We can rewrite this with `redux-starter-kit` as follows:

```ts
import { createReducer } from 'redux-starter-kit';

const todoReducer = createReducer({}, {
  addTodo: (state, action) => ...,
  remove: (state, action) => ...,
  clear: (state, action) => ...,
  complete: (state, action) => ...
})
```

Several important features of `createReducer()`:

1. Provides a more concise way of writing reducers, using an object with keys that match the possible values of `action.type`

2. Handles "no match" case and returns the previous state (rather than a blank state like we had done previously)

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

We can write code with mutable arrays (without spread syntax):

```ts
function insertItem(array, action) {
  // splice is a standard JS Array function
  array.splice(action.index, 0, action.item);
}

function removeItem(array, action) {
  array.splice(action.index, 1);
}
```

In cases where you need to replace the entire state (like `setFilter`), simply return a new value without modifying the state like so:

```ts
function setFilter(state, action) {
  return action.filter;
}
```

### `combineReducers()` - combining reducers

Using [`combineReducers()`](https://redux.js.org/recipes/structuring-reducers/using-combinereducers), we can further reduce the amount of boilerplate code. As the application store evolves and is responsible for increasing amounts of state, it becomes advantageous to decompose the reducer into smaller functions. `combineReducers()` provides an API that lets authors build more, smaller reducers, each with a single responsibility.

Our todo app's Redux store so far has this shape, roughly:

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

Currently, the store captures two separate but related pieces of data: the todo items and the selected filter. The reducers should follow the shape of the store. Think of reducers as parts of the store which are responsible to update a single part of the store based on the action passed in. As complexity of state grows, we split these reducers:

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

`combineReducers` handles the grunt work of sending actions to the appropriate reducer. Therefore, when an action arrives, each reducer is given the opportunity to modify its own section of the state tree based on the incoming action.
