# Exercise

1. Create a function named `getFavs`. Inside, run `alert('clicked')`.
2. Create a variable `button` and set it to a reference to our button by using `document.querySelector('button')`
3. Add a click event listener to the button that calls `getFavs`. Click the button and make sure the alert is displayed.
4. Replace the `alert` call with a new `favList` variable set to an empty array: `[]`
5. Create a const variable `inputs` set to all of the inputs on the page. [`querySelectorAll`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll) will help here.
6. Iterate over all of the inputs using `for (const input of inputs) {}`
7. In each iteration, use an `if` statement to check if `input.checked` is equal to true
8. If the above tests passes, push the `input.parentNode.textContent` onto the `favList` array by passing the text as a parameter to `favList.push()` ([`push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) is a built-in array method.)
9. Outside of the for loop, use `document.querySelector('.favorites')` to target the div at the bottom of the page. Set the div's `textContent` to `favList.join(' ')`. This will join each of the foods together into a string separated by a space.
