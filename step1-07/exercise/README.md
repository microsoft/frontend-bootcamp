# Step 1.7 - Types and creating a UI-driven state (Exercise)

If you don't already have the app running, start it by running `npm start` from the root of the `frontend-bootcamp` folder. Click the "exercise" link under day 1 step 7 to see results.

## TodoFooter

1. Open TodoFooter and write a `TodoFooterProps` interface. It should include two values, a `clearCompleted` and `todos`. Use this interface in the function props like this: `(props: TodoFooterProps)`

2. Write an `handleClick` function that calls `props.clear`.

3. Assign `handleClick` to the button's `onClick` prop.

4. Test out this functionality. Check a few todos complete and click the `Clear Completed` button.

## TodoHeader

1. Open TodoHeader then write and use the `TodoHeaderProps` which will include `addTodo`, `changeFilter` and `filter`.

2. Add `onFilter` to each of the filter buttons

- Note that we can't add new parameters to onClick, but we can pull information from the event target!

4. Call `onSubmit` from the submit button

5. Check out this new functionality! We can now add and filter todos!
