# Step 2.7: Connect Redux store to view (Exercise)

[Lessons](../) | [Exercise](./exercise/) | [Demo](./demo/)

If you still have `npm test` running from the last step, stop it using `ctrl+C`. Start the app by running `npm start` from the root of the `frontend-bootcamp` folder. Click the "exercise" link under day 2 step 7 to see results.

1. Open `exercise/src/index.tsx` and wrap `<TodoApp>` with `<Provider>` as instructed in the comment

2. Open `exercise/src/components/TodoFooter.tsx` and erase the "nullable" type modifier (i.e. the ?) in the interface definition of `TodoFooterProps`

3. Remove the `export` from `export const TodoFooter = (props: TodoFooterProps) => {`

4. Uncomment the bottom bits of code and fill in the implementation for `mapStateToProps()` and `mapDispatchToProps()` - feel free to use `TodoListItem.tsx` as a guide

5. Repeat steps 2, 3, and 4 for the `TodoHeader.tsx` file

## Bonus exercise

For further reading, go here to learn more about the `mergeProps` and `options` parameters to `connect()`:

https://react-redux.js.org/api/connect
