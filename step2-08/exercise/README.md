# Step 2.8: Reduce Boilerplate (Exercise)

[Lessons](../) | [Exercise](./exercise/) | [Demo](./demo/)

# Exercise

If you don't already have the app running, start it by running `npm start` from the root of the `frontend-bootcamp` folder. Click the "exercise" link under day 2 step 8 to see results.

> Hint! This section is tricky, so all the solution is inside "demo" as usual. Feel free to copy & paste if you get stuck!!

1. open up `exercise/src/reducers/index.ts`

2. rewrite the reducer functions `todoReducers`, `filterReducers` with the help of `createReducer()`

3. rewrite the `reducer()` function with `combineReducer()`

4. open up `exercise/src/reducers/pureFunctions.ts`

5. rewrite all the reducers related to the todos by following instructions

# Further reading

- immer: https://github.com/mweststrate/immer - improves ergonomics of working with immutables by introducing the concept of mutating a draft

- redux-starter-kit: https://github.com/reduxjs/redux-starter-kit - help address common concerns of Redux in boilerplate and complexity
