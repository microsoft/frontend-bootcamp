# Step 1.7 - Types and creating a UI-driven state (Exercise)

If you don't already have the app running, start it by running `npm start` from the root of the `frontend-bootcamp` folder. Click the "exercise" link under day 1 step 7 to see results.

## TodoFooter

1. Open TodoFooter and write a `TodoFooterProps` interface. It should include two values, a `clear` and `todos`. Use this interface in the function props like this: `(props: TodoFooterProps)`.

2. Write an `_onClick` function that calls `props.clear`.

- Since TodoFooter is not a class, the `_onClick` function needs to be stored in a const placed before the `return`.
- Remember to use an arrow function to define this click handler.

3. Assign `_onClick` to the button's `onClick` prop. You won't need to use `this` since the component isn't a class.

4. Test out this functionality. Check a few todos complete and click the `Clear Completed` button.

## TodoHeader

1. Open TodoHeader and write `TodoHeaderProps` which will include `addTodo`, `setFilter` and `filter`. Replace the first `any` in the class declaration with this interface.

2. This component also has state. Write a `TodoHeaderState` interface (there's just one value), and use it to replace the second `any`.

3. Assign `_onFilter` as the `onClick` event handler for each of the filter buttons.

- Note that we can't add new parameters to onClick, but we can pull information from the event target!

4. Assign `_onAdd` as the `onClick` event handler for the submit button.

5. Check out this new functionality! We can now add and filter todos!
