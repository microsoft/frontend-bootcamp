# Step 2.6 - Redux: React binding (Exercise)

[Lessons](../../) | [Demo](../demo/)

If you don't already have the app running, start it by running `npm start` from the root of the `frontend-bootcamp` folder. Click the "exercise" link under day 2 step 6 to see results.

At the beginning of this exercise, the "Add" and "Clear Completed" buttons do not work. We'll be fixing that in this step!

1. Open `exercise/src/index.tsx` and wrap `<TodoApp>` with `<Provider>` as instructed in the comment

2. Open `exercise/src/components/TodoFooter.tsx` and erase the "nullable" type modifier (the `?`) in the interface definition of `TodoFooterProps`

3. Uncomment the bottom bits of code and fill in `connect()` arguments - feel free to use `TodoListItem.tsx` as a guide

4. Repeat steps 2, 3 for the `TodoHeader.tsx` file

## Bonus exercise

For further reading, go here to learn more about the `mergeProps` and `options` parameters to `connect()`:

https://react-redux.js.org/api/connect
