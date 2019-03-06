# Step 1.5 - Building a static page in React (Exercise)

From this exercise on, we'll be working in VS Code instead of CodePen. If you don't already have the bootcamp folder open in a VS Code window, see the [main readme](https://github.com/Microsoft/frontend-bootcamp/blob/master/README.md) for instructions.

If you don't already have the app running, start it by running `npm start` from the root of the `frontend-bootcamp` folder. Click the "exercise" link under day 1 step 5 to see results.

## TodoFooter

1. Add a TodoFooter component in the `components` folder, copying over the `<footer>` tag and all of its children from `TodoApp.html` in the `step1-05` folder. This component could be a function or class.
2. Remove any `onclick` properties, and change `class` to `className`

## TodoList

1. Add a TodoList component like you did with the footer. This could also be function or class.
2. Import TodoListItem and add four of them inside of the `<ul>`
3. Bonus points for using a [`for`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration) loop or using [`map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) to create 4 list items based on the array `[1,2,3,4]`

## App

1. Import both of these components into `App.tsx` and place their tags below the `TodoHeader`.
