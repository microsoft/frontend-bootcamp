## Exercise

### TodoFooter

1. Open TodoFooter and write a TodoFooterProps interface. It should include two values, a function and an object. Assign this interface to props like this: `(props: TodoFooterProps)`
2. Write an `_onClick` function that calls `props.clear`.
   > Since TodoFooter is not a class the `_onClick` needs to be declared as a const, and placed before the `return`.
3. Add `_onClick` to the button's `onClick`. You won't need to use `this` since this isn't a class.
   > We can't assign our `clear` function directly to `onClick`. We always need to create a function that calls our callbacks. `() => props.clear()`
4. Test out this functionality. Check a few todos complete and click the `Clear Completed` button

### TodoHeader

1. Open TodoHeader and write TodoHeaderProps which will include 3 values. Replace the first `any` with this interface.
2. This component also has state. Write TodoHeaderState (there's just one item), and add this where the second `any` was.
3. Add `_onFilter` to each of the filter buttons
   > Note that we can't add new parameters to onClick, but we can pull information from the event target!
4. Write an `_onAdd` method that calls `addTodo` on the current `labelInput`, then sets the `labelInput` in state to an empty string
5. Call `_onAdd` from the submit button
6. Check out this new functionality! We can now add and filter todos!
