# Step 2.7

Connect store to view with `react-redux`. `connect()` is used to turn Redux store and dispatch functions into props inside React components. The state and action dispatchers are passed along with a `<Provider>` component.

# Exercise

1. open up `exercise/src/index.tsx` and wrap `<TodoApp>` with `<Provider>` as instructed in the comment

2. open up `exercise/src/components/TodoFooter.tsx` and erase the "nullable" type modifier (i.e. the ?) in the interface definition of `TodoFooterProps`

3. uncomment the bottom bits of code and fill in the implementation for `mapStateToProps()` and `mapDispatchToProps()` - feel free to use `TodoListItem.tsx` as a guide

4. do steps 2 and 3 for the `TodoHeader.tsx` file
