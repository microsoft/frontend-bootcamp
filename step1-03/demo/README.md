# JavaScript Demo

Now that we have a UI that looks like a todo app, we need to make it **function** like a todo app. In this example we are going to use raw JavaScript to explicitly modify our application as we interact with it. This will be in stark contrast to the implicit approach we will take when we do this with React in the next exercise.

> Keep an eye on how often user actions directly modify the HTML on the page. You'll see this number drop to zero when we start using React.

## What we're starting with

This demo starts off with a few functions already in place. Let's walk through what's already here.

- `clearInput()` - This is a generic, reusable function that takes in a `selector` parameter, finds the first matching element, and sets the element's value to an empty string. This direct modification is called a **side effect**.
- `getTodoText()` - This is a helper function that returns the value inside of our text field. Notice how some functions return values and how you can save that return value in a variable.
- `filter()` - This function takes in a `filterName` string, and a `button` which is a reference to the clicked button.
  1. Remove the `selected` class from the previously selected element.
  2. Add `selected` to the clicked button.
  3. Set `filterName` to the clicked button's `innerText` value.
  4. Get all of the todos with [`querySelectAll`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll), and then loop through them.
  5. Set the `hidden` property of each todo based on the filter/state combination.

## Writing `addTodo` Function

We start writing all functions with the `function` keyword and the name of our function. Functions can take parameters, but in this case we don't need to pass any through, so we follow the function name with an empty `()`. Everything we want this function to do will then be placed in a set of brackets `{}`.

```js
function addTodo() {}
```

### Creating a Todo Clone

The first thing we need to do in this function is create a `newTodo` which is a clone of an existing Todo.

```js
function addTodo() {
  const todo = document.querySelector('.todo');
  const newTodo = todo.cloneNode(true);
}
```

Passing true to our `cloneNode` means it is a deep clone, so we get a copy of the todo's children as well.

> Note that this approach is very fragile, as it requires a todo node to always be present on the page.

### Updating the newTodos's text

With this clone created, we need to update the `innerText` of the node with our todo text, which is returned from `getTodoText()`.

```js
function addTodo() {
  const todo = document.querySelector('.todo');
  const newTodo = todo.cloneNode(true);

  newTodo.querySelector('.title').innerText = getTodoText();
}
```

We can target a child node by calling `querySelector` again and asking for the child with the `.child` class.

> Note that if we left off the `()` we'd actually be assigning innerText to the 'function' instead of the function return.

### Placing the newTodo into the list of todos

Making a clone only stores the clone inside of our variable. If we want to place it back into the DOM, we'll need to insert it manually. For that we can use [insertBefore](https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore).

This function actually needs to target the parent element, which we can get by calling `todo.parentElement` and passing parameters of `(elementToInsert, elementToInsertBefore)`.

```js
function addTodo() {
  const todo = document.querySelector('.todo');
  const newTodo = todo.cloneNode(true);
  newTodo.querySelector('.title').innerText = getTodoText();
  todo.parentElement.insertBefore(newTodo, todo);
}
```

### Cleanup

Now that our todo has been inserted into the DOM, we can clear the text input. In the exercise, we'll also update the count of the remaining todos in the footer from here.

```js
function addTodo() {
  ...
  clearInput('.textfield');
}
```

> Note how often we have to reach into the DOM to find nodes, manipulate content, insert back into the DOM and manually change the values in inputs. This is the error prone manipulation that React helps us avoid.

## Triggering functions from click events

Now that we have a working `addTodo` function, we need a way to trigger it when the user is ready. This can be done in two ways.

1. We can find the element with `querySelector`, then set its `onclick` to our function

```js
document.querySelector('.addTodo .submit').onclick = addTodo;
```

2. We can add the function directly to our button in our HTML

```html
<button onclick="addTodo()" class="submit">Add</button>
```

Today we'll use #2, as this is the way it will work in React as well.
