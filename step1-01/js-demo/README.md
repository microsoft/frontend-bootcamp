## JavaScript Demo

It's entirely possible to create a website with nothing but HTML and CSS, but as soon as you want user interaction other than links and forms, you'll need to reach for JavaScript, the scripting language of the web. Fortunately, JavaScript has grown up quite a bit since it was introduced in the 90s, and now runs just about everything: web applications, mobile applications, native applications, servers, robots and rocket ships.

In this demo we are going to cover a few of the core basics of the language that will help us when we start writing our TODO app. At the end of this demo we will be able to display the number of the letter 'a's in our email input. Here's the markup we're working with:

```html
<div id="contact-form">
  <label>Email</label><input class="email" type="email" />
  <input class="submit" value="Submit" type="submit" />
</div>
```

By the end of the demo we'll have covered the following:

- Variables
- Functions
- Conditionals
- Loops
- Interacting with the DOM (Document Object Model)

### Variables

We can create a new variable with the keywords `var, let, const` and use them within our application. These variables can contain one of the following types of values:

1. boolean
2. number
3. string
4. array
5. object

> Javascript is a loosly typed language so if start a variable off as a number `let myVar = 0`, you can change it to a string by simply writing `myVar = 'hello'` without any trouble.

Lets start off our demo by adding some variables to our [script tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)

```js
const match = 'a';
let matches = 0;
```

### Functions

Functions are resuable pieces of functionality. Functions can take inputs (parameters), and return values. Functions can be called from within your program, from within other functions, or invoked from within the DOM itself.

In our example we'll create a function called displayMatches (camelCase is typical for functions) and we'll invoke this function anytime that our submit button is clicked. For now we'll simply call a console log (a function that prints values to the browser console);

```html
<input onclick="displayMatches()" class="submit" value="Submit" type="submit" />
```

```js
function displayMatches() {
  console.log("I'm Clicked");
}
```

### Iteration

Next up we are going to iterate through a string of text, and find all of the 'a' characters in the list. We don't yet have that string, so we'll use a fill in for now. Once we have our `email` variable we can loop over it with the [`for of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop syntax.

```js
function displayMatches() {
  const text = 'abcda';
  for (let letter of text) {
    console.log(letter);
  }
}
```

### Conditionals

Next we want to compare each `letter` with our `match` value, and if they are the same, we will increment our matches variable. Notice that `match` is a const and `matches` is a let because we expected `matches` to change over time. Remember that `letter = match` would set the `letter` variable to the value in `match`, so we use `==`, equality operator, and `===` strict equality operator, to make these comparisons.

> ("1" == 1) is true whereas ("1" === 1) would be false

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

### Interacting with the DOM

Now that we have a function performing all of our logic, it's time to connect this to our DOM by using some of the browsers built in functions.

First we need to get a reference to the email field in our app. To do this, I've added an `id` to the input, and we will call one of JavaScripts oldest methods (IE 5.5), getElementyId, which we find on the browser provided `document` global variable. This function will return a reference to that input, and we can store it in the `email` variable.

```js
const email = document.getElementById('email');
console.log(email);
```

And since what we're actually after is the "value" of the input field, we can set our `text` variable to the string assigned to the "value" key. To see this in action. Right click on the console message created by the code above, choose "save as variable" and then type `variableName.value`.

```js
const text = email.value;
```

#### Returning the values to the DOM

Now that we've read values from the DOM, and fed that into our matching logic, we are ready to return that number to our app. To do this we first need to grab a reference to our submit button, and since this button has no `id` we are going to use the more modern (IE8) `querySelector` to get it. This function takes any valid CSS selector and returns the first found match.

```js
const submit = document.querySelector('.submit');
```

Now that we have a reference to the submit input, we can set its value to a new value.

```js
submit.value = matches + ' matches';
```

If you are curious, we could have done this in a single line by chaining these methods and keys together:

```js
document.querySelector('.submit').value = matches + ' matches';
```

## Next Step

[Start our Todo App](../../step1-02/demo/)
