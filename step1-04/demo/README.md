# Step 1.4 - Introduction to React (Demo)

In this demo we'll be creating a simple counter that will display a count and increment on click.

Let's start this demo in [CodePen](https://codepen.io/micahgodbolt/pen/wOWeVb?editors=0010).

## React Hello World

```js
ReactDOM.render(<p>Hello World</p>, document.getElementById('app'));
```

Calling `ReactDOM.render()` is how our code gets on the page. The function takes two parameters: the content to place on the page, and the element in which you want it placed.

The first parameter to `render()` looks a lot like HTML, but actually, it's [JSX](https://reactjs.org/docs/introducing-jsx.html). There are a few key differences between JSX and HTML:

- Since `class` is a [reserved word](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords) in JavaScript, you will need to use `className` on your HTML tags: `<div className="foo">`
- We can use custom HTML tags corresponding to the React components we create: `<div><MyControl>hi</MyControl></div>`
- Controls can be self-closing: `<MyControl text='hi' />`
- You can use JavaScript inside of JSX!

## Writing a React component

A React component is a piece of code that returns a portion of your application. This can include HTML markup, CSS styles, and JavaScript driven functionality.

Components can be created in two ways. The first is method is to use a [JavaScript class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes), which extends (inherits from) the `React.Component` class.

Classes in JavaScript provide a way to collect methods (functions) and properties (values) in an extensible container. We extend `React.Component` because it provides us with several built-in methods, including `render`.

```jsx
class App extends React.Component {
  render() {
    return <p>Hello World</p>;
  }
}
```

We could also write this component as a function:

```jsx
const App = props => {
  return <p>Hello World</p>;
};
```

Moving our "Hello World" markup into our App's `render` function, we can now update the `ReactDOM.render()` call to look like this:

```jsx
ReactDOM.render(<App />, document.getElementById('app'));
```

> Note that React components can be reused by writing them in the same way you would an HTML tag.

### Props

Whether you write the component as a class or a function, it can take in additional props using the same syntax as HTML attributes like `id` or `href`.

```jsx
<App text="Hello World" />
```

The `text` prop can be accessed inside your component via `props.text` in a function component or `this.props.text` in a class component.

```jsx
const App = props => {
  return <p>{props.text}</p>;
};
```

`props` allow your component to be more reusable, since you can create multiple instances of the same component with different props.

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

### Destructuring props

Writing `props.text` over and over in a function (or `this.props.text` in a class) can be quite tedious. Since this is all JavaScript, you could create a new variable for this text using variable assignment.

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

A common approach to simplify this process is to use a syntax called [destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring).

Destructuring allows you to pull individual pieces of information out of an object in a single statement.

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

### Cleanup

Before we move on, we'll modify our `ReactDOM.render` call to just include our App. This render call typically includes just a single component with no props.

Next we'll be creating a `Counter` component. We'll add that to our App now, and then start to write the control.

```jsx
const App = props => {
  return <Counter text="chickens" />;
};

ReactDOM.render(<App />, document.getElementById('app'));
```

> Note the capitalization of `Counter`. HTML might not be case-sensitive, but JSX is! A common practice is to use the capitalized names of HTML elements to name corresponding React components: Button, Select, Label, Form, etc.

## Writing a stateful Counter component

React allows each control to specify its own data store, called **state**. We can reference values in state when we render our UI, and we can also update state over the lifetime of our application.

> Most stateful components you'll see today will be `class` based. It is just recently possible to add state to function components through the use of [`hooks`](https://reactjs.org/docs/hooks-intro.html)

### Adding state

JavaScript classes use a `constructor` method to instantiate each copy of a class, along with any applicable state. Let's create a new component called `Counter` and give it a state containing a `clicks` property with a default value of `0`;

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
- The [`super()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super) function calls the constructor of the parent class (in this case `React.Component`).
- Our `clicks` state value can now be accessed via `this.state.clicks`. Later, we can update state by calling `this.setState({ clicks: 1 })`.

### Rendering our Counter

For our `Counter` component, the goal is to be able to track how many times the counter's button is clicked. We'll use the following markup.

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

### Writing our button click handler

Our next step is to wire up the button to increment the `clicks` in our component state.

> By convention we place other methods below `render()`, and private methods (those for internal use only) are prefixed with an underscore.

This function will update our component's state, incrementing the clicks value by 1. (Note that `setState` only modifies the values of keys listed in the object passed as its parameter.)

```jsx
_onButtonClick = () => {
  this.setState({
    clicks: this.state.clicks + 1
  });
};
```

> This isn't exactly a method, but a class property that is set to an [arrow function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions). This mostly works the same as `onButtonClick() { }` but eliminates the need for [extra boilerplate](https://medium.freecodecamp.org/this-is-why-we-need-to-bind-event-handlers-in-class-components-in-react-f7ea1a6f93eb) used to avoid potential "gotchas" with [how `this` works in JavaScript](https://codeburst.io/javascript-the-keyword-this-for-beginners-fb5238d99f85).)

> Note that the `setState` call could also be written as `this.setState(prevState => ({ clicks: prevState.clicks + 1 }));` to ensure that state is not updated until the previous state has been determined.

Now that we have a function to increment our count, all that's left is to connect it to our button.

```jsx
<button onClick={this._onButtonClick}>Click</button>
```

> Also note that each `Counter` maintains its own state! You can modify the state inside of one counter without affecting the others.

## Try it all out!

Add a couple `Counter`s to our `App`, each with different text. Notice how they can easy take in different props and maintain their own state.

## Moving this into our codebase

To scale our application, we'll need to break up the file into smaller, reusable pieces. In this part of the demo we'll look at the `final` folder and how the JavaScript module system allows us to break up our components into a collection of files exporting their functionality.

### Module exports and imports

Open up `step1-04/final/components/Counter.tsx` and look at the `Counter` component.

```tsx
export class Counter extends React.Component {
  // ...
}
```

This file exports the Counter component as a **named export**. This means when we import it we do the following:

```tsx
import { Counter } from './components/Counter';
```

> Note the `{}` wrapped around the import value. This is actually an example of destructuring.

#### Default exports

We typically use named exports, but it's also possible export a default value like this:

```tsx
export default class Counter extends React.Component {
  // ...
}
```

When we import the component we can call it whatever we want:

```tsx
import SomeCounterComponent from './components/Counter';
```

## Writing a Button component

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
