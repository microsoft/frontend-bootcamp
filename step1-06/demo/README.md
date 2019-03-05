# Step 1.6 - Creating a state-driven UI (Demo)

In React, the data travels in one direction: top-down in the form of state propagating down the component hierarchy. Only the component containing the state can change the state itself. When a UI interaction occurs, a stateful component must pass down an event handler to the UI component triggering the event in order to signal a state change.

[Step #3 of "Thinking in React"](https://reactjs.org/docs/thinking-in-react.html) suggests finding the "minimal set of mutable state" that your application requires. So in this demo we are going to add that "minimal state" to our application and drive our UI off of that data. With that done, the next step will be to create ways to modify that state, which will in turn cascade down through our UI. This [reconciliation](https://reactjs.org/docs/reconciliation.html) process, figuring out what in your UI needs to change based on changing state, is what React excels at.

## Adding state to TodoApp

Inside our `TodoApp` class, we will add the minimal state for our application, which includes just two keys: `todos` and `filter`. We don't need to worry about a `remaining` count because it can be calculated by counting the number of todos where the `completed` field is set to `false`.

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
    filter: 'active'
  };
}
```

> You could also use an array to represent your todos. Array manipulation can be easier in some cases, but this object approach simplifies other functionality and will ultimately be more performant.

## Passing state through to UI

Now we can pass `filter` and `todos` into our components.

```jsx
render() {
  const { filter, todos } = this.state;
  return (
    <div>
      <TodoHeader filter={filter} />
      <TodoList todos={todos} filter={filter} />
      <TodoFooter todos={todos} />
    </div>
  );
}
```

## State-driven TodoList

I've already pulled out our props into `filter` and `todos` variables, and written a bit of JS that will return an array of filtered todo `id`s. We'll be using that filtered array to render our todo items.

> `todos[id]` returns the todo matching the `id` passed in, and the spread operator (...) is the same as saying `label={todos[id].label} completed={todos[id].completed}`

```jsx
return (
  <ul className="todos">
    {filteredTodos.map(id => (
      <TodoListItem key={id} id={id} {...todos[id]} />
    ))}
  </ul>
);
```

## State-driven and stateful TodoHeader

Within the header, we've got a situation where we not only want to pass `filter` state down to it, but we also want to maintain state within the control. Fortunately, this is no problem at all for React. First off let's deal with the incoming state.

### Conditional class names

In CSS-based styling, visual states are applied by adding and removing classes. We can use the filter value to conditionally add a class, thereby lighting up the correct filter button.

```jsx
<nav className="filter">
  <button className={filter === 'all' ? 'selected' : ''}>all</button>
  <button className={filter === 'active' ? 'selected' : ''}>active</button>
  <button className={filter === 'completed' ? 'selected' : ''}>completed</button>
</nav>
```

> The [ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) `condition ? expressionIfTrue : expressionIfFalse` is widely used in React code, as each expression could be a string for a className or even a JSX element.

### Adding a controlled input

In React, form elements such as `<input>`, `<textarea>`, and `<select>` can be used as either **uncontrolled** or **controlled**.

An **uncontrolled input** maintains its current value internally and updates it based on user interactions (entering text, choosing options, etc). The code only pulls the value from the input when it's needed, such as on submit. This is similar to how inputs in a plain HTML form work.

A **controlled input** takes its current value from a prop and use a callback to notify the parent component of changes made by the user. The input's value doesn't change until the parent component updates the input's props in response to the callback.

> The distinction between controlled and uncontrolled is important to understand when writing or using form components, and misunderstandings of this concept are a very common source of bugs. See [this article](https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/) for a more detailed explanation.

Let's try changing the text field in our `TodoHeader` component to a controlled input. To add a controlled input, we need two things, which our demo already provides:

1. A state variable to hold the input's value:

```jsx
this.state = { labelInput: '' };
```

2. A callback function to update that value:

```jsx
_onChange = evt => {
  this.setState({ labelInput: evt.target.value });
};
```

With those two pieces in place, we can update our uncontrolled input to being controlled.

```jsx
<input value={this.state.labelInput} onChange={this._onChange} className="textfield" placeholder="add todo" />
```

> If you have React Dev Tools installed, open them up and take a look at `labelInput` as we type in the input.
