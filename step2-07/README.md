# Step 2.7

[Lessons](../) | [Exercise](./exercise/) | [Demo](./demo/)

Connect store to view with `react-redux`. `connect()` is used to turn Redux store and dispatch functions into props inside React components. The state and action dispatchers are passed along with a `<Provider>` component.

```ts
const NewComponent = function connect(mapStateToProps?, mapDispatchToProps?, mergeProps?, options?)(OldComponent);
```

The `connect()` function takes in a few functions that maps some portion of the state tree and dispatcher functions as props. It is a **higher order function** meaning that the return value of `connect()` is a function that decorates OldComponents into a NewComponent with all the mapped props.

This `mapStateToProps` function selects out portions of the state tree. This function informs the connected view when to re-render based on a shallow comparison from previous state.

# Exercise

1. open up `exercise/src/index.tsx` and wrap `<TodoApp>` with `<Provider>` as instructed in the comment

2. open up `exercise/src/components/TodoFooter.tsx` and erase the "nullable" type modifier (i.e. the ?) in the interface definition of `TodoFooterProps`

3. Remove the `export` from `export const TodoFooter = (props: TodoFooterProps) => {`

4. uncomment the bottom bits of code and fill in the implementation for `mapStateToProps()` and `mapDispatchToProps()` - feel free to use `TodoListItem.tsx` as a guide

5. do steps 2, 3, and 4 for the `TodoHeader.tsx` file
