## Exercise

### TodoFooter

1. Open TodoFooter and write a TodoFooterProps interface. It should include two values, a function and an object. Use this interface in the function props like this: `(props: TodoFooterProps)`

2. Write an `_onClick` function that calls `props.clear`.
   > Since TodoFooter is not a class, the `_onClick` function needs to be stored in a const placed before the `return`.

3. Assign `_onClick` to the button's `onClick` prop. You won't need to use `this` since the component isn't a class.

4. Test out this functionality. Check a few todos complete and click the `Clear Completed` button.

### TodoHeader

1. Open TodoHeader and write TodoHeaderProps which will include three values. Replace the first `any` in the class declaration with this interface.

2. This component also has state. Write TodoHeaderState (there's just one value), and add this where the second `any` was.

3. Add `_onFilter` to each of the filter buttons
   > Note that we can't add new parameters to onClick, but we can pull information from the event target!

4. Write an `_onAdd` method that calls `addTodo` on the current `labelInput`, then sets the `labelInput` in state to an empty string

5. Call `_onAdd` from the submit button

6. Check out this new functionality! We can now add and filter todos!
