# Step 1.5 - Building a static page in React (Demo)

To start building our todo application, we'll follow the steps outlined in [Thinking in React](https://reactjs.org/docs/thinking-in-react.html). The first step of the process is to break our application into a component hierarchy. For this app, we're going to keep it simple and just use four parts.

- TodoHeader
- TodoList
- TodoListItem
- TodoFooter

You can find the HTML for our application in `step1-05/TodoApp.html`.

## TodoHeader

We'll store all of our components inside a `components` folder under `src`. Let's create that now. We'll then start writing the `TodoHeader` in `src/components/TodoHeader.tsx`. The `tsx` file extension tells our editor that this file includes React code written in TypeScript.

> We'll talk about TypeScript soon, but for now, know that all valid JavaScript is valid TypeScript.

```jsx
import React from 'react';

export class TodoHeader extends React.Component<any, any> {
  render() {
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
  }
}
```

> Note that since this is React, we had to change `class` to `className`, but nothing else changes.

## TodoListItem

Any time you see repeated complex elements, that is usually a sign that you should create a new component. With a few props you can typically abstract all of those elements into a single component. This is certainly the case with todo items.

```jsx
import React from 'react';

export class TodolistItem extends React.Component<any, any> {
  render() {
    return (
      <li className="todo">
        <label>
          <input type="checkbox" /> Todo 1
        </label>
      </li>
    );
  }
}
```

> Note that this control could also be created as a function instead of a class:
> ```jsx
> export const TodoListItem = (props) => {
>   return (
>     <li className="todo">
>       <label>
>         <input type="checkbox" /> Todo 1
>       </label>
>     </li>
>   );
> }
> ```
