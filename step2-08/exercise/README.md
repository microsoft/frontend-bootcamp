# Step 2.8: Reduce Boilerplate (Exercise)

[Lessons](../) | [Exercise](./exercise/) | [Demo](./demo/)

If you don't already have the app running, start it by running `npm start` from the root of the `frontend-bootcamp` folder. Click the "exercise" link under day 2 step 8 to see results.

> Hint! This section is tricky, so the whole solution is inside `demo` as usual. Feel free to copy & paste if you get stuck!!

1. Open up `exercise/src/reducers/index.ts`

2. Rewrite the reducer functions `todoReducers` and `filterReducers` with the help of [`createReducer()`](https://redux-starter-kit.js.org/api/createreducer)

3. Rewrite the `reducer()` function with [`combineReducers()`](https://redux.js.org/recipes/structuring-reducers/using-combinereducers)

4. Open up `exercise/src/reducers/pureFunctions.ts`

5. Rewrite all the reducers related to the todos by following the instructions in the code

## Further reading

- [`immer`](https://github.com/mweststrate/immer) - Improves ergonomics of working with immutables by introducing the concept of mutating a draft

- [`redux-starter-kit`](https://github.com/reduxjs/redux-starter-kit) - Help address common concerns of Redux in boilerplate and complexity
