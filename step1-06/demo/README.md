# Step 1.6 - Creating a state-driven UI (Demo)

In React, the data travels in one direction: top-down in the form of state propagating down the component hierarchy. Only the component containing the state can change the state itself. When a UI interaction occurs, a stateful component must pass down an event handler to the UI component triggering the event in order to signal a state change.

[Step #3 of "Thinking in React"](https://reactjs.org/docs/thinking-in-react.html#step-3-identify-the-minimal-but-complete-representation-of-ui-state) suggests finding the "minimal set of mutable state" that your application requires. What pieces of state can we identify?

[Step #4 of "Thinking in React"](https://reactjs.org/docs/thinking-in-react.html#step-4-identify-where-your-state-should-live) asks us to think about where our state should live.

- Is the state local to a single component?
- Is the state derived from another state?
- Is the state primarily in one component but shared with others?
- Is the state global?

## Adding state to TodoApp

Inside of our `TodoApp` component we only need to track two pieces of state, our `todos` and the current `filter`. We don't need to worry about a `remaining` count because it can be calculated by counting the number of todos where `status` is set to `active`.

```jsx
export const TodoApp = () => {
  const [filter, setFilter] = React.useState<FilterTypes>('all');
  const [todos, setTodos] = React.useState<Todos>([
    {
      id: '04',
      label: 'Todo 4',
      status: 'completed',
    },
    {
      id: '03',
      label: 'Todo 3',
      status: 'active',
    },
    {
      id: '02',
      label: 'Todo 2',
      status: 'active',
    },
    {
      id: '01',
      label: 'Todo 1',
      status: 'active',
    },
  ]);

```

## Passing state through to UI

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

## State-driven TodoList

I've already pulled out our props into `filter` and `todos` variables, and written a bit of JS that will return an array of filtered todos. We'll be using that filtered array to render our todo items.

React requires any dynamic length list to have unique `key` properties, for which we can use the `todo.id`. This key helps React to only re-render the parts of the list that changes.

```jsx
return (
  <ul className="todos">
    {filteredTodos.map((todo) => (
      <TodoListItem key={todo.id} {...todo} />
    ))}
  </ul>
);
```

## State-driven and stateful TodoHeader

In `TodoHeader.tsx` we are going to both display the selected filter state, and track the text for a new todo.

### Conditional class names

In CSS-based styling, visual states are applied by adding and removing classes. We can use the filter value to conditionally add a class, thereby lighting up the correct filter button.

```jsx
<nav className="filter">
  <button className={filter === 'all' && 'selected'}> all</button>
  <button className={filter === 'active' && 'selected'}> active</button>
  <button className={filter === 'completed' && 'selected'}> completed</button>
</nav>
```

> The [logical AND (&&) operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND) is often used to conditionally render a string. In the case that the condition is false the `className` is simply ommited.

### Adding a controlled input

In React, form elements such as `<input>`, `<textarea>`, and `<select>` can be used as either **uncontrolled** or **controlled**.

An **uncontrolled input** maintains its current value internally and updates that value based on user interactions (entering text, choosing options, etc). The code only polls the value from the input when it's needed, such as on submit. This is similar to how inputs in a plain HTML form work.

A **controlled input** takes its current value from a prop or state and use a callback to modify that value when a change is made by the user.

> The distinction between controlled and uncontrolled is important to understand when writing or using form components, and misunderstandings of this concept are a very common source of bugs. See [this article](https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/) for a more detailed explanation.

Let's try changing the text field in our `TodoHeader` component to a controlled input. To add a controlled input, we need two things, which our demo already provides:

1. A state variable to hold the input's value:

```jsx
const [inputText, setInputText] = React.useState('');
```

2. A callback function to update that value:

```jsx
const onInput = (e) => {
  setInputText(e.target.value);
};
```

With those two pieces in place, we can update our uncontrolled input to being controlled.

```jsx
<input value={inputText} onChange={onInput} className="textfield" placeholder="add todo" />
```

> If you have React Dev Tools installed, open them up and take a look at `labelInput` as we type in the input.
