# Step 1.6 - Creating a state-driven UI (Exercise)

If you don't already have the app running, start it by running `npm start` from the root of the `frontend-bootcamp` folder. Click the "exercise" link under day 1 step 6 to see results.

### TodoFooter

1. Use the provided `itemCount` value to display the current number of items left.
2. Use a [ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) to print "item" vs "item**s**" based on whether `itemCount === 1`.

### TodoListItem

1. Pull in `label` and `completed` from props using [destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring)
2. Set the todo's text to `label` and the `checked` prop to `completed`
   > Note that this is only half the work we need to do to make these controlled inputs work. What is the other half?
