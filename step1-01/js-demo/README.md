## JavaScript Demo

It's entirely possible to create a website with nothing but HTML and CSS, but as soon as you want user interaction other than links and forms, you'll need to reach for JavaScript, the scripting language of the web. Fortunately, JavaScript has grown up quite a bit since it was introduced in the 90s, and now runs just about everything: web applications, mobile applications, native applications, servers, robots and rocket ships.

In this demo we are going to cover a few of the core basics of the language that will help us when we start writing our TODO app. At the end of this demo we will be able to display the number of the letter "a"s in our email input. Here's the markup we're working with:

```html
<div id="contact-form">
  <label>Email</label><input id="email" type="email" />
  <input class="submit" value="Submit" type="submit" />
</div>
```

By the end of the demo we'll have covered the following:

- Variables
- Functions
- Conditionals
- Loops
- Interacting with the DOM (Document Object Model)

### Introduction To Variables

We can create a new variable with the keywords `var`, `let`, `const` and use them within our application. These variables can contain one of the following types of values:

- **boolean**: `true`, `false`
- **number**: `1`, `3.14`
- **string**: `'single quotes'`, `"double quotes"`, or `` `backticks` ``
- **array**: `[ 1, 2, 3, 'hello', 'world']`
- **object**: `{ foo: 3, bar: 'hello' }`
- **function**: `function(foo) { return foo + 1 }`
- **null**
- **undefined**

> JavaScript is a loosely typed (dynamic) language, so if you initially store a number in a variable (`let myVar = 0`), you can change it to contain a string by simply writing `myVar = 'hello'` without any trouble.

### Adding Variables

Let's start off our demo by adding some variables to our [script tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script). The other examples on this page will reference these variables.

```js
const match = 'a';
let matches = 0;
```

> Note that `const` variables are those that will never change during the duration of your program, whereas `let` can change over time. Our `match` value will stay constant, but our `matches` will increment as we find matches.

### Functions

Functions are reusable pieces of functionality. Functions can take inputs (parameters) and return values (or neither). Functions can be called from within your program, from within other functions, or invoked from within the DOM itself.

In our example we'll create a function called `displayMatches` (camelCase is typical for functions) and we'll invoke this function every time that our submit button is clicked. For now we'll simply have our function call `console.log` (a function that prints values to the browser console):

```html
<input onclick="displayMatches()" class="submit" value="Submit" type="submit" />
```

```js
function displayMatches() {
  console.log("I'm Clicked");
}
```

### Iteration

Next we'll update our function to iterate through a string of letters. We loop over each letter using the [`for of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) syntax. We'll use real input later, but for now this verifies that our function is working.

```js
function displayMatches() {
  const text = 'abcda';
  for (let letter of text) {
    console.log(letter);
  }
}
```

### Conditionals

Next we want to compare each `letter` with our `match` value, and if they are the same, we will increment our `matches` variable. Remember that `letter = match` would set the `letter` variable to the value in `match`, so to do comparisons, we use the equality operator `==` or the strict equality operator `===`.

```js
function displayMatches() {
  const text = 'abcda';
  for (let letter of text) {
    if (letter === match) {
      matches++;
    }
  }
  console.log(matches);
}
```

> In JavaScript, it's safest to use strict `===` for comparisons, because `==` will try to convert the operands to the same type. For example, `"1" == 1` is true whereas `"1" === 1` is false, but the behavior in certain other cases is [not what you'd expect](https://www.youtube.com/watch?v=et8xNAc2ic8). (See [this video](https://www.destroyallsoftware.com/talks/wat) for more strange JavaScript behavior.)

### Interacting with the DOM

Now that we have a function performing all of our logic, it's time to connect this to our DOM by using some of the browser's built-in functions.

First we need to get a reference to the email field in our app's DOM. To do this, I've added an `id` to the input, and we will call one of JavaScript's oldest methods (IE 5.5), `getElementById`, which we find on the browser-provided `document` global variable. This function will return a reference to that input, and we can store it in the `email` variable.

```js
function displayMatches() {
  const email = document.getElementById('email');
  console.log(email);
  ...
}
```

Since what we're actually after is the value of the input field, we can set our `text` variable to the string assigned to the email input's `value` key. To see this in action, in Chrome you can right click on the console message created by the code above, choose "save as variable" and then type `variableName.value`.

```js
function displayMatches() {
  const email = document.getElementById('email');
  const text = email.value;
  console.log(text);
  ...
}
```

#### Returning the values to the DOM

Now that we've read values from the DOM and fed that into our matching logic, we are ready to return the number of matches to our app. To do this we first need to grab a reference to our submit button, and since this button has no `id` we are going to use the more modern (IE8+) `querySelector` to get it. This function takes any valid CSS selector and returns the first match found.

```js
function displayMatches() {
  ...
  const submit = document.querySelector('.submit');
}
```

Now that we have a reference to the submit input, we can set its value contain to the number of matches.

```js
function displayMatches() {
  ...
  const submit = document.querySelector('.submit');
  submit.value = matches + ' matches';
}
```

We could also have done this in a single line as follows:

```js
function displayMatches() {
  ...
  document.querySelector('.submit').value = matches + ' matches';
}
```

## Next Step

[Start our Todo App](../../step1-02/demo/)
