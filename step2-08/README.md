# Step 2.8

Combine Reducers

This lesson is just a helper to make the process of writing reducers use less boilerplate code. This step briefly introduces to a world of helpers in writing Redux code.

# Take a peek at useful helpers and middleware created by community are:

- immer: https://github.com/mweststrate/immer - improves ergonomics of working with immutables by introducing the concept of mutating a draft

- redux-starter-kit: https://github.com/reduxjs/redux-starter-kit - help address common concerns of Redux in boilerplate and complexity

# Exercise

1. open up `exercise/src/reducers/index.ts`

2. implement the `filterReducer` function with a switch / case statement - it is contrived to have a switch case for ONE condition, but serves to be a good exercise here

3. replace the export reducer function with the help of the `combineReducer()` function from `redux`

# Bonus Exercise

The Redux team came up with `redux-starter-kit` to address a lot of boilerplate concerns. They also embed the immer library to make it nicer to write reducer functions. So, let's try out `immer`! Look at this example: https://github.com/mweststrate/immer#reducer-example

1. import immer into the `exercise/src/reducers/pureFunction.ts` file

2. replace the implementation of the pure functions with the help of immer's `produce()`

3. run `npm test` in the root folder to see if it still works!

4. look at the web app to make sure it still works!
