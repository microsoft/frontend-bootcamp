# Creating a State Driven UI

In React, data travels two directions: top-down in the form of state propagating throughout controls, and bottom-up as interacting with the UI flows back up to modify the state. When writing an application it's often helpful to think of these two directions as separate parts of the development process.

## Demo

[Step #3 of Thinking in React](https://reactjs.org/docs/thinking-in-react.html) suggests finding the "minimal set of mutable state" that your application requires. So in this demo we are going to add that "minimal state" to our application and drive our UI off of that data. With that done, the next step will be to create ways to modify that state, which will in turn cascade down through our UI. This [reconciliation](https://reactjs.org/docs/reconciliation.html) process, figuring out what in your UI needs to change based on changing state, is what React excels at.

### Adding State to App

For our minimal state, we're going to include just two keys: `todos` and `filter`. We don't need to worry about a `remaining` value because we can calculate that by looking at the number of unchecked todos.

So here is our full constructor:

```jsx
constructor(props) {
  super(props);
  this.state = {
    todos: {
      '04': {
        label: 'Todo 4',
        completed: true
      },
      '03': {
        label: 'Todo 3',
        completed: false
      },
      '02': {
        label: 'Todo 2',
        completed: false
      },
      '01': {
        label: 'Todo 1',
        completed: false
      }
    },
    filter: 'all'
  };
}
```

> You could also use an array to represent your todos. Array manipulation can be easier in some cases, but this object approach simplifies other functionality and will ultimately be more performant.

### Passing State Through to UI

To avoid reaching into state over and over, we once again use destructuring to pull out the pieces we need.

```jsx
const { filter, todos } = this.state;
```

Now we can pass `filter` and `todos` into our components.

```jsx
return (
  <div>
    <TodoHeader filter={filter} />
    <TodoList todos={todos} filter={filter} />
    <TodoFooter todos={todos} />
  </div>
);
```

### State-Driven TodoList

I've already pulled out our props into `filter` and `todos` variables, and written a bit of JS that will return an array of filtered todo `id`s. We'll be using that filtered array to render our todo items.

```jsx
{
  filteredTodos.map(id => <TodoListItem key={id} id={id} {...todos[id]} />);
}
```

- [`map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map): This method transforms the array it's called on into a new array (our rendered TodoListItems).
- `key`: We use the `id` from the `filterTodos` array as the [list item key](https://reactjs.org/docs/lists-and-keys.html) to help React track each item as state changes and the component re-renders.
- `id`: The `key` is not actually passed into the component, so we pass the same value as `id` as well. This will help us out later.
- `todos[id]`: Lastly we use the `id` to grab the todo from our `todos` object, then use the [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) to pass through the todo's `label` and `completed` values.
  > This spread operator is the same as saying `label={todos[id].label} completed={todos[id].completed}`. Pretty obvious why spread is so handy!

### State-Driven and Stateful Header

Within the header we've got a situation where we not only want to pass `filter` state down to it, but we also want to maintain state within the control. Fortunately, this is no problem at all for React. First off let's deal with the incoming state.

#### Conditional Class Names

In CSS-based styling, visual states are applied by adding and removing classes. We can use the filter value to conditionally add a class, thereby lighting up the correct filter button.

```jsx
<nav className="filter">
  <button className={filter === 'all' ? 'selected' : ''}>all</button>
  <button className={filter === 'active' ? 'selected' : ''}>active</button>
  <button className={filter === 'completed' ? 'selected' : ''}>completed</button>
</nav>
```

> [Ternary operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) are very popular in React code, as each expression could be a string for a className or even a JSX element.

#### Adding a Controlled Input

In traditional HTML forms, users interact with the
 enter values which are tracked by the browser, and on submit, the values are captured and transmitted. Those are called **uncontrolled inputs**. A **controlled input** in React is one whose value is defined by state, and interaction with that input updates state with each keystroke. This round trip process might sound inefficient, but in reality it has little to no impact, and it enables some advanced form functionality.

To create a controlled component, we need two things, which our demo already provides:

1. A state variable to hold the input's value:

```jsx
this.state = { labelInput: '' };
```

2. A function to update that value:

```jsx
_onChange = evt => {
  this.setState({ labelInput: evt.target.value });
};
```

With those two pieces in place, we can update our uncontrolled input to being controlled.

```jsx
<input value={this.state.labelInput} onChange={this._onChange} className="textfield" placeholder="add todo" />
```
