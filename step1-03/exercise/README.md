## Exercise

If you don't already have the app running, start it with `npm run static` from the root of the `frontend-bootcamp` folder. Click the "exercise" link under day 1 step 3 to see results.

### Update Navigation

1. Add an `onclick` attribute to all three buttons in the navigation.
2. In each `onclick` call the `filter` function. In our function we need a reference to the clicked button, so pass in the keyword `this` as the only parameter.

### Write an `updateRemaining` function

1. Get a reference to the span with the `remaining` class, and store it in a variable.
2. Use [`querySelectorAll`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll) to get all of the todos.
3. Set the `innerText` of the remaining span to the length of those todos.
4. Add `updateRemaining()` to the end of the `addTodo` function.

### Write a `clearCompleted` function

1. Get a reference to all of the todos with [`querySelectorAll`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll).
2. Use a `for (let todo of todos)` loop to iterate over each todo.
3. Inside the for loop write an `if` statement to test if the `input` inside of the todo has a checked value of true.
   > Hint: you can use `querySelector` on any HTML element to find matching child elements.
4. Call `todo.remove()` for any todo whose input is checked.
5. After the loop is done, run `updateRemaining()`.
6. Attach `clearCompleted()` function to the `onclick` of the footer button.
7. Test it out!
