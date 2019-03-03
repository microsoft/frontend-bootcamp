# Building a Static Page

## Demo

To start off our todo application we are going to follow the steps outlined in [Thinking in React](https://reactjs.org/docs/thinking-in-react.html). The first step of the process is to break our application into a component hierarchy. For this app, we're going to keep it simple and just use four parts.

- TodoHeader
- TodoList
- TodoListItem
- TodoFooter

We could go a lot deeper into creating buttons, inputs and checkboxes, but this is a great place to start. Often you'll want to start with a single large control and then break it up into smaller pieces.

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

We'll start off with all of the files scaffolded and imported into our App. This will let us dive right into each control and see updates quickly.

### TodoHeader

Our objective for now is to create a static version of our application, so we'll copy over the entire header tag from a previous step, minus any function calls we added.

> Note that since this is React we had to change `class` to `className`, but nothing else changes.

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

Any time you see repeated complex elements, that is usually a sign that you should create a new component. With a few props you can typically abstract all of those elements into a single component. This is certainly the case with todo items.

```jsx
return (
  <li className="todo">
    <label>
      <input type="checkbox" /> Todo 1
    </label>
  </li>
);
```

> Note that I've removed the title span as it was only needed to make targeting that text easier.
# Next Step

[CSS Demo](../css-demo)
