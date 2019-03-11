# Step 1.3 - Introduction to JavaScript (Demo)

It's entirely possible to create a website with nothing but HTML and CSS, but as soon as you want user interaction other than links and forms, you'll need to reach for JavaScript, the scripting language of the web. Fortunately, JavaScript has grown up quite a bit since it was introduced in the '90s, and now runs just about everything: web applications, mobile applications, native applications, servers, robots and rocket ships.

In this demo we are going to cover a few core basics of the language that will help us when we start writing our todo app. At the end of this demo we will be able to count and display the number of the letter "a"s in our email input. Here's the markup we're working with:

```html
<div id="contact-form">
  <label for="email">Email</label><input id="email" type="email"/>
  <input class="submit" value="Submit" type="submit" />
</div>
```

By the end of the demo we'll have covered the following:

- Variables
- Events
- Functions
- Conditionals
- Loops
- Interacting with the DOM (Document Object Model)

## Introduction to variables

We can create a new variable with the keywords `var`, `let`, `const` and use them within our application. These variables can contain one of the following types of values:

- **boolean**: `true`, `false`
- **number**: `1`, `3.14`
- **string**: `'single quotes'`, `"double quotes"`, or `` `backticks` ``
- **array**: `[ 1, 2, 3, 'hello', 'world']`
- **object**: `{ foo: 3, bar: 'hello' }`
- **function**: `function(foo) { return foo + 1 }`
- **null**
- **undefined**

> [When to use `var`/`let`/`const`?](https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var-to-declare-a-variable-in-jav) Use `const` for variables you never expect to change, and `let` for anything else. `var` is mostly no longer used. See the link for more details about how each works.

### Variable examples

```js
const myBoolean = true;
const myNumber = 5;
const myString = `Using backticks I can reuse other variables ${myNumber}`;
const myArray = [1, 'cat', false, myString];
const myObject = { key1: 'value1', anotherKey: myArray };
const myFunction = function(myNumberParam) {
  console.log(myNumber + myNumberParam);
};
```

> JavaScript is a dynamically typed language, so if you initially store a number in a variable (`let myVar = 0`), you can change it to contain a string by simply writing `myVar = 'hello'` without any trouble.

### Adding variables

Let's start off our demo by adding a variable to our [script tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script). This variable will be global and constant.

```js
const match = 'a';
```

## Functions

Functions are reusable pieces of functionality. Functions can take inputs (parameters) and return values (or neither). Functions can be called from within your program, from within other functions, or invoked from within the DOM itself.

In our example we'll create a function called `displayMatches` (camelCase is typical for functions) and we'll invoke this function every time that our submit button is clicked. For now we'll simply have our function call `alert("I'm Clicked")`, which is a function that displays an alert message box in your browser.

```js
function displayMatches() {
  alert("I'm Clicked");
}
```

## Events

Functions on their own don't have any effect on the page. When I declare `function displayMatches()` I have only defined the function; I haven't actually executed it.

To execute a function we need to attach it to an event. There are a number of possible events: keyboard strokes, mouse clicks, document loading, and more.

### Add event listeners

To attach a function to an event, we use an [`addEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventListener) like this:

```js
window.addEventListener('load', function() {
  console.log('loaded');
});

window.addEventListener('click', function() {
  console.log('click');
});
```

> [`window`](https://developer.mozilla.org/en-US/docs/Web/API/Window) is a reference to the entire window containing the HTML document.

### Global event handlers

If you think this feels a little verbose, you're not alone. Many of the [most common event types](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers) are available as element properties. This way we can set properties like `onload` or `onclick` like this:

```js
window.onload = function() {
  console.log('loaded!');
};
window.onclick = function() {
  console.log('clicked!');
};
```

> Note that only a single function can be assigned to `onload`, but many event listeners can be added for `load`.

In our example, we want to trigger a function when a button is clicked. To do this, we first need to get a reference to the button. We can use the [`querySelector`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) method of the browser-provided [`document`](https://developer.mozilla.org/en-US/docs/Web/API/Document) global variable to get that reference. Then we can set our `displayMatches` function to be the button's `onclick` handler.

```js
const button = document.querySelector('.submit');
button.onclick = displayMatches;
```

You can also combine the two statements together like this:

```js
document.querySelector('.submit').onclick = displayMatches;
```

Reload the page and click the button to see your function in action!

## Iteration

Next we'll update our function to iterate through a string of letters. We loop over each letter using the [`for of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) syntax. We'll use real input later, but for now this verifies that our function is working.

```js
function displayMatches() {
  const text = 'abcda';
  for (let letter of text) {
    console.log(letter);
  }
}
```

## Conditionals

Next we want to compare each `letter` with our global `match` value, and if they are the same, we will increment a `matches` variable. Remember that `letter = match` would set the `letter` variable to the value in `match`, so to do comparisons, we use the equality operator `==` or the strict equality operator `===`.

```js
function displayMatches() {
  const text = 'abcda';
  let matches = 0;
  for (let letter of text) {
    if (letter === match) {
      matches++;
    }
  }
  console.log(matches);
}
```

> In JavaScript, it's safest to use strict `===` for comparisons, because `==` will try to convert the operands to the same type. For example, `"1" == 1` converts `"1"` to a number and returns true. This result makes decent sense, but the behavior in certain other cases is [not what you'd expect](https://www.youtube.com/watch?v=et8xNAc2ic8). (See [this video](https://www.destroyallsoftware.com/talks/wat) for more strange JavaScript behavior.)

## Interacting with the DOM

Now that we have a function performing all of our logic, it's time to connect this to our DOM by using some of the browser's built-in functions.

First we need to get a reference to the email field in our app's DOM. To do this, I've added an `id` to the input, and we'll find the element using [`getElementById`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById) from the `document` global variable. This function will return a reference to that input, and we can store it in the `email` variable.

```js
function displayMatches() {
  const email = document.getElementById('email');
  console.log(email);
  // ...
}
```

Since what we're actually after is the value of the input field, we can set our `text` variable to the string contained in the email input's `value` key. To see this in action, in Chrome you can right click on the console message created by the code above, choose "save as variable" and then type `variableName.value`.

```js
function displayMatches() {
  const email = document.getElementById('email');
  const text = email.value;
  console.log(text);
  // ...
}
```

### Writing values back to the DOM

Now that we've read values from the DOM and fed that into our matching logic, we are ready to return the number of matches to our app. To do this we first need to grab a reference to our submit button, and since this button has no `id`, we'll use `querySelector` to get it. This function takes any valid CSS selector and returns the first match found.

```js
function displayMatches() {
  // ...
  const submit = document.querySelector('.submit');
}
```

Now that we have a reference to the submit input, we can set its value contain to the number of matches.

```js
function displayMatches() {
  // ...
  const submit = document.querySelector('.submit');
  submit.value = matches + ' matches';
}
```

We could also have done this in a single line as follows:

```js
function displayMatches() {
  // ...
  document.querySelector('.submit').value = matches + ' matches';
}
```
