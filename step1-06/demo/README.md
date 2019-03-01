# Creating a State-Driven UI

In React, the data travels in one direction: top-down in the form of state propagating down the component hierarchy. Only the component containing the state can change the state itself. When a UI interaction occurs, a stateful component must pass down an event handler to the UI component triggering the event in order to signal a state change.

## Demo

[Step #3 of "Thinking in React"](https://reactjs.org/docs/thinking-in-react.html) suggests finding the "minimal set of mutable state" that your application requires. So in this demo we are going to add that "minimal state" to our application and drive our UI off of that data. With that done, the next step will be to create ways to modify that state, which will in turn cascade down through our UI. This [reconciliation](https://reactjs.org/docs/reconciliation.html) process, figuring out what in your UI needs to change based on changing state, is what React excels at.

### Adding State to App

Inside our `TodoApp` class, we will add the minimal state for our application, which includes just two keys: `todos` and `filter`. We don't need to worry about a `remaining` value because it can be calculated by counting the number of todos where the `completed` field is set to `false`.

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
const { filter, todos = [] } = this.state;
```

> Note that I've set `todos` to default to an empty array so that the `todos` variable is never undefined

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
  filteredTodos.map(id => <TodoListItem key={id} id={id} {...todos[id]} />)
}
```

- [`map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map): This method iterates over the array it's called on, transforming each value with the passed in function and returning the values in a new array (our rendered TodoListItems).
- `key`: We use the `id` from the `filterTodos` array as the [list item key](https://reactjs.org/docs/lists-and-keys.html) The keys should be unique as they help React track which items are added, removed, or updated and determine whether an instance of an item should be rerendered or a new one created.
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

> The [ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) `condition ? expressionIfTrue : expressionIfFalse` is widely used in React code, as each expression could be a string for a className or even a JSX element.

#### Adding a Controlled Input

In React, form elements such as `<input>`, `<textarea>`, and `<select>` can be used as either **uncontrolled** or **controlled**. (This paradigm also applies to UI Fabric's customized implementations of form components, which we'll use later.)

An **uncontrolled input** maintains its current value internally and updates it based on user interactions (entering text, choosing options, etc). The code only pulls the value from the input when it's needed, such as on submit. This is similar to how inputs in a plain HTML form work.

A **controlled input** takes its current value from a prop and use a callback to notify the parent component of changes made by the user. The input's value doesn't change until the parent component updates the input's props in response to the callback.

Typically, a controlled input's current value is stored in the parent component's state (then passed to the input as a prop during render). The parent updates its state in response to the callback, which causes the input to be re-rendered with a new prop value. This round trip process might sound inefficient, but in reality it has little to no impact and helps enable some advanced form functionality.

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

> If you have React Dev Tools installed, open them up and take a look at labelInput as we type in the input.
