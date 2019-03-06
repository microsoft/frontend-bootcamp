# Bonus: Service calls (Demo)

[Lessons](../../)

> Note: this step doesn't work with the live site on github.io. Clone the repo to try this step out.

## `redux-thunk`: side effects inside action creators

The [Redux Thunk](https://github.com/reduxjs/redux-thunk) middleware allows writing actions that make service calls.

Remember those simple little action functions? They're called action creators. These little functions can be charged with superpowers to allow asynchronous side effects to happen while creating the messages. Asynchronous side effects include service calls against APIs.

Action creators are a natural place to put service calls. Redux Thunk middleware passes `dispatch()` and `getState()` from the store into the action creators. This allows the action creator itself to dispatch different actions in between async side effects. Combined with the async / await syntax, coding service calls is a cinch!

Most of the time, in a single-page app, we apply **optimistic UI updates**. We can update the UI before the network call completes so the UI feels more responsive.

## Action creator with a thunk

[What's a thunk?](https://daveceddia.com/what-is-a-thunk/) - it is a wrapper function that returns a function. What does it do? Let's find out!

This action creator just returns an object:

```ts
function addTodo(label: string) {
  return { type: 'addTodo', id: uuid(), label };
}
```

In order for us to make service calls, we need to supercharge this with the power of `redux-thunk`

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

1. The outer function has the same function signature as the previous one
2. It returns a function that has `dispatch` and `getState` as parameters
3. The inner function is `async` enabled, and can await on "side effects" like asynchronous service calls
4. This inner function has the ability to dispatch additional actions because it has been passed the `dispatch()` function from the store
5. This inner function also has access to the state tree via `getState()`
