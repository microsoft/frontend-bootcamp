1. Create a function named `getFavs` and set its contents to `alert('clicked')`
2. Create a variable `button` and set it to a reference to our button by using `document.querySelector('button')`
3. Add a click event listener to the button that calls `getFavs`. Click the button and make sure it calls our alert.
4. Replace the alert with a new `favList` variable set to an empty array: `[]`
5. Create a const variable `inputs` set to all of the inputs on the page. `querySelectorAll` will help here
6. Iterate over all of the inputs using `for (const input of inputs) {}`
7. For each iteration use an `if` statement to check if `input.checked` is equal to true
8. If the above tests passes, push the `input.parentNode.textContent` onto the `favList` array. Pass that text into `favList.push()` as the parameter to add it to the array
9. Outside of the for loop, use `document.querySelector('.favorites')` to target the div at the bottom of the page. Set the div's `textContent` to `favList.join(' ')`. This will join each of the foods together into a string separated by a space.
