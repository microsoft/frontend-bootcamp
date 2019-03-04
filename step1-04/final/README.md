# Step 4 - Introduction To React Demo

In this demo we'll be creating a simple counter that will display a count and increment on click.

Let's start this demo [in CodePen](https://codepen.io/micahgodbolt/pen/wOWeVb?editors=0010)

## React Hello World

```js
ReactDOM.render(<p>Hello World</p>, document.getElementById('app'));
```

- `ReactDOM.render()` - This function is how our code gets on the page. The function takes two parameters, the content to place on the page, and the location that you want it placed.

## Writing a React Component

A React component is a piece of code that returns a portion of your application. This can include HTML markup, CSS styles as well as JavaScript driven functionality.

Components can be created in two ways. The first is method is to use a [JavaScript class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes), which extends (inherits from) the `React.Component` class.

Classes in JavaScript provide a way to collect methods(functions) and properties(values) in an extendable container. We extend `React.Component` because it provides us with several built-in methods, including `render`.

```jsx
class App extends React.Component {
  render() {
    return <p>Hello World</p>;
  }
}
```

We could also write this component as a function that takes in `props` and returns [JSX](https://reactjs.org/docs/introducing-jsx.html)

```jsx
const App = props => {
  return <p>Hello World</p>;
};
```

Moving our "Hello World" markup into our App's `render` function, we can now update the `ReactDOM.render()` function to look like this:

```jsx
ReactDOM.render(<App />, document.getElementById('app'));
```

> Note that React components can be reused by writing them in the same way you would an HTML tag

### Props

Either way you write the component, the component can take in additional props using the same syntax as HTML attribute like `id` or `href`.

```jsx
<App text="Hello World" />
```

The prop can then be accessed by your component via `props.text` in our function or `this.props.text` in the class.

```jsx
const App = props => {
  return <p>{props.text}</p>;
};
```

`props` allow your component to be more reusable as you can use multiple instances of the same component with different props.

```jsx
ReactDOM.render(
  <div>
    <App text="Hello World" />
    <App text="How are you doing?" />
  </div>,
  document.getElementById('app')
);
```

> Note that a render function can only return a single element, so our two `App` components need to be wrapped in a `div`.

```jsx
const App = props => {
  return <p>{props.text ? props.text : 'oops!'}</p>;
};
```

### Destructuring Props

Writing `props.text` over and over in a function (or `this.props.text` in a class) can be quite tedius. Since this is all JavaScript you could create a new variable for this text using variable assignment.

```jsx
const App = props => {
  const text = props.text;
  return <p>{text ? text : 'you missed something'}</p>;
};
```

This works fine for a single prop, but as your component starts to become more complex:

```jsx
<MyComponent
  open={false}
  count={5}
  text="Hi there"
  items={['cat', 'dog', 'bird']}
  config={{
    start: 1,
    end: 10,
    autoStart: true
  }}
/>
```

> Note that all non-string values are passed through as JavaScript by wrapping them in `{}`.

Your code starts to look like this:

```jsx
const open = props.open;
const text = props.text;
const count = props.count;
const items = props.items;
const start = props.config.start;
const end = props.config.end;
```

A common approach to simplify this process is to use a technique called [`destructuring`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring).

Destructuring allows you to pull individual pieces of information out of a complex data type in a single line.

```jsx
const {
  open,
  text,
  count,
  items,
  config: { start, end }
} = props;
```

So while this might be overkill right now, it makes it easier to add props down the road.

```jsx
const App = props => {
  const text = props.text;
  return <p>{text ? text : 'you missed something'}</p>;
};
```

### Cleanup

Before we move on, we'll reset our `ReactDom.render` to just return our App. This render function typically includes just the single component with no props.

Next we'll be creating a `Counter` component, so we'll add that to our App now, and start to write the control.

```jsx
const App = props => {
  return <Counter text="chickens" />;
};

ReactDOM.render(<App />, document.getElementById('app'));
```

> Note the capitalization of `Counter`. HTML might not be case-sensitive, but JSX is! A common practice is to use the capitalized names of HTML elements to name corresponding React components: Button, Select, Label, Form, etc.

## React State

React allows each control to specify its own data store, called **state**. We can reference values in state when we render our UI, and we can also update state over the lifetime of our application.

> Most stateful components you'll see today will be `class` based. It is just recently possible to add state to function components through the use of [`hooks`](https://reactjs.org/docs/hooks-intro.html)

### Adding State

JavaScript classes uses a `constructor` method to instantiate each copy of a class, along with any applicable state. Let's create a new component called `Counter` and give it a state of `clicks` with a default value of `0`;

```js
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    };
  }
}
```

- The constructor takes in the component's `props`.
- The [`super(props)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super) function calls the constructor of the parent class (in this case `React.Component`).
- Our `counter` state value can now be accessed via `this.state.counter`. Later, we can update state by calling `this.setState({ counter: 1 })`.

### Creating our Counter

For our `Counter` component, the goal is to be able to track how many times the `counter`'s button is clicked. We'll use the following markup.

```jsx
render() {
  const {text} = this.props;
  const {clicks} = this.state;
  return (
    <div>
      {text}: {clicks}
      <button>Click</button>
    </div>
  )
}
```

### Writing our Button Click Handler

Our next step is to wire up the button to increment the `counter` in our component state.

> By convention we place other methods below `render()`, and private methods (those for internal use only) are prefixed with an underscore.

This function will update our component's state, incrementing the counter value by 1. (Note that `setState` only modifies the values of keys listed in the object passed as its parameter.)

```jsx
_onButtonClick = () => {
  this.setState({
    clicks: this.state.clicks + 1
  });
};
```

> Note that this could also be written as `this.setState(prevState => ({ counter: prevState.counter + 1 }));` to ensure that state is not updated until the previous state has been determined

Now that we have a function to increment our count, all that's left is to connect it to our button.

```jsx
<button onClick={this._onButtonClick}>Click</button>
```

> Also note that each `Counter` maintains its own state! You can modify the state inside of one counter without affecting the others.

## Try it all out!

Add a couple `Counter`s to our `App`, each with different text. Notice how they can easy take in different props and maintain their own state.

## Moving this into out codebase

### Module Exports

### Module Imports

## Using a Button component

Buttons are among the most commonly written components. Custom buttons help abstract common styling, add icons or other decorations, and increase functionality (menu buttons etc). Let's take a quick look at a custom button component to see how it comes together.

```jsx
import React from 'react';
import './Button.css';

export const Button = props => {
  return (
    <button className="Button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};
```

- All components need to import React (don't worry, only one copy ever gets into your app)
- CSS files imported into the component are only loaded if the component is used
- React components can be created as a class **or** as a function. In this function component, props are passed in as a function parameter.
  > Until recently, you could only access state in class-based components. But with the advent of [hooks](https://reactjs.org/docs/hooks-intro.html) you can create stateful function components.
- Since this is a function, we don't have any methods, including `render()`. Just return your JSX as you would in the render function of a class-based component.
- `props.children` contains anything passed between the opening and closing tags: `<Button>I'm in children</Button>`
