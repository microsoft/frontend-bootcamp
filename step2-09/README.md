# Step 2.9

Redux Thunk middleware for actions with service calls. The documentation is here:

https://github.com/reduxjs/redux-thunk

Action creators are a natural place to put service calls. Redux thunk middleware passes in the `dispatch()` and `getState()` from the store into the action creators. This allows the action creator itself to dispatch different actions in between async side effects. Combined with the async / await syntax, coding service calls is a cinch!

Most of the time, in a single-page app, we apply **optimistic UI updates**. We can update the UI before the network call completes so the UI feels more responsive.

# Exercise

1. open up `exercise/src/service/index.ts` and study the signature of the functions to call the service such as the `add()` function

2. open `exercise/src/actions/index.ts` and fill in the missing content inside `actionsWithService`

- note that the `complete` and `clear` functions require you to write your own wrapper function

3. open `exercise/src/index.tsx` and follow the instructions in the TODO comment to make the app prepopulate with data from the service.
