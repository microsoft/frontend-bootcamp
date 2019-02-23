# Thinking In React: Hierarchy and Building a Static Version

## Demo

To start off our Todo application we are going to follow the steps outline in [Thinking in React](https://reactjs.org/docs/thinking-in-react.html). The first step of the process is to break our application into a component hierarchy. For this app, we're going to keep it simple and just use four parts.

- TodoHeader
- TodoList
  -TodoListItem
- TodoFooter

We could go a lot deeping creating buttons, inputs and checkboxes, but this is a great place start. Often you'll want to start with a single large control, and then start breaking it up into smaller pieces.

### TodoApp

```jsx
import React from 'react';
import { TodoFooter } from './components/TodoFooter';
import { TodoHeader } from './components/TodoHeader';
import { TodoList } from './components/TodoList';

export class TodoApp extends React.Component {
  render() {
    return (
      <div>
        <TodoHeader />
        <TodoList />
        <TodoFooter />
      </div>
    );
  }
}
```

We'll start off with all of the file scaffolded and imported into our App. This will let us dive right into each control and see updates quickly.

### TodoHeader

Our objective is to create a static version of our application, so we'll copy over the entire header tag, minus any function calls we may have added.

> Note that since this is React we had to change `class` to `className`, otherwise nothing changes

```jsx
return (
  <header>
    <h1>todos</h1>
    <div className="addTodo">
      <input className="textfield" placeholder="add todo" />
      <button className="submit">Add</button>
    </div>
    <nav className="filter">
      <button className="completed">all</button>
      <button>active</button>
      <button>completed</button>
    </nav>
  </header>
);
```

### TodoListItem

Anytime you see repeated complex elements, that is usually a sign to create a new component. With a few props you can typically abstract all of those elements into a single component. This is certainly the case with Todos items.

```jsx
return (
  <li className="todo">
    <label>
      <input type="checkbox" /> Todo 1
    </label>
  </li>
);
```

> Note that I've removed the title span as it was only needed to make targeting that text easier

## Exercise

### TodoFooter

1. Update the TodoFooter component, copying over the `<footer>` tag and all of its children
2. Remove any `onclick` properties, and change `class` to `className`

### TodoList

1. Update the TodoList component like you did with the footer.
2. Import TodoListItem and add 4 of them inside of the `<ul>`
3. Bonus points for using a [`for`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration) loop or using [`map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) to create 4 list items based on the array `[1,2,3,4]`
