# Step 2.9

[Lessons](../) | [Exercise](./exercise/) | [Demo](./demo/)

> Note: this step doesn't work with the live site on github.io. Clone this repo to try this step out

# `redux-thunk`: side effects inside action creators

Redux Thunk middleware for actions with service calls. The documentation is here:

https://github.com/reduxjs/redux-thunk

Remember those simple little action functions? They're called action creators. These little functions can be charged with super powers to allow asynchronous side effects to happen while creating the messages. Asynchronous side effects include service calls against APIs.

Action creators are a natural place to put service calls. Redux thunk middleware passes in the `dispatch()` and `getState()` from the store into the action creators. This allows the action creator itself to dispatch different actions in between async side effects. Combined with the async / await syntax, coding service calls is a cinch!

Most of the time, in a single-page app, we apply **optimistic UI updates**. We can update the UI before the network call completes so the UI feels more responsive. To

# Action Creator with a Thunk

[What's a thunk?](https://daveceddia.com/what-is-a-thunk/) - it is a wrapper function that returns a function. What does it do? Let's find out!

This action creator just returns an object

```ts
function addTodo(label: string) {
  return { type: 'addTodo', id: uuid(), label };
}
```

In order for us to make service calls, we need to super charge this with the power of `redux-thunk`

```ts
function addTodo(label: string) {
  return async (dispatch: any, getState: () => Store) => {
    const addAction = actions.addTodo(label);
    const id = addAction.id;
    dispatch(addAction);
    await service.add(id, getState().todos[id]);
  };
}
```

Let's make some observations:

1. the outer function has the same function signature as the previous one
2. it returns a function that has `dispatch` and `getState` as parameters
3. the inner function is `async` enabled, and can await on "side effects" like asynchronous service calls
4. this inner function has the ability to dispatch additional actions because it has been passed the `dispatch()` function from the store
5. this inner function also has access to the state tree via `getState()`

# Exercise

If you don't already have the app running, start it by running `npm start` from the root of the `frontend-bootcamp` folder. Click the "exercise" link under day 2 step 9 to see results.

1. open up `exercise/src/service/index.ts` and study the signature of the functions to call the service such as the `add()` function

2. open `exercise/src/actions/index.ts` and fill in the missing content inside `actionsWithService`

- note that the `complete` and `clear` functions require you to write your own wrapper function

3. open `exercise/src/index.tsx` and follow the instructions in the TODO comment to make the app prepopulate with data from the service.
