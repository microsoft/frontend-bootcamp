# Introduction To React Demo

In our last example we saw how we could take a static HTML page and turn it into an interactive page with some buttons and their `onclick` handlers.

In this example we'll see how React turns that paradigm completely around. With React, the entire DOM is generated and maintained by JavaScript, directly inside the browser. This makes it easier to assemble your application out of reusable pieces, maintain state within a component, and pass data between them.

In this demo we'll be creating a simple counter that will display a count and increment on click.

## Building

If you already have the app running from a previous step, stop it with `ctrl+C`. Start the app version used in this step by running `npm start` from the root of the `frontend-bootcamp` folder. Click the "demo" link under day 1 step 4 to see results.

## The App

This is the starting point of our React application. It is a component just like the other ones we will be building, but this component will only ever be used once, to render the application. Here's how our app starts out. Let's walk through each line:

```jsx
import React from 'react';

export class App extends React.Component {
  render() {
    const text = 'My App';
    return (
      <div className="App">
        <h2>{text != '' ? text : 'Default App Name'}</h2>
      </div>
    );
  }
}
```

- `import React from 'react';` - This is how we [import modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) in JavaScript. This line creates a variable in this file called `React` that is equal to the default `export` of the `react` npm module.
- `export class App` - Just like React exports code, our App component is nothing more than an exported `App` class. This allows us to import the class into other files.
- `extends React.Component` - A JavaScript class is similar to a class in other programming languages (it's a collection of methods and properties). Classes can also be extended, so when we create a React component class, we always extend the base `React.Component` class. (Note that this `Component` class is coming from the `React` variable imported up top.)
- `render()` - One of the methods defined by `React.Component` is the `render()` method, which defines the HTML the component is going to render.
- `return` - Remember that functions can return values in addition to having side effects, and this component is no different.

**Inside of the return?** It's HTML! Actually, it's [JSX](https://reactjs.org/docs/introducing-jsx.html), but with very few exceptions you can treat it like HTML. A few key differences:

- Since `class` is a [reserved word](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords) in JavaScript, you will need to use `className` on your HTML tags: `<div className="foo">`
- We can use custom HTML tags corresponding to the React components we create: `<div><MyControl>hi</MyControl></div>`
- Controls can be self-closing: `<div><MyControl text='hi' /></div>`
- You can use JavaScript inside of JSX!

## index.tsx

This is the file that places your App onto the page.

```ts
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
ReactDOM.render(<App />, document.getElementById('app'));
```

- `import ReactDOM from "react-dom";` - We've seen React imported before, but now we're also grabbing `ReactDOM` from a package called `react-dom`.
  > Note that this casing is intentional. Usually, NPM packages are kebab-case and exported items are camelCase or PascalCase. PascalCase is usually used for "proper noun" exports: ProjectName, ComponentName, etc.
- `import { App } from './App';` - If we had exported our app using `export default class App extends React.Component`, this line would look similar to the lines above - `import App from './App';`. But the convention for React components is to use named exports, which can easily be extracted using syntax like `{ App }`.
  > This notation is called [object destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring), and it's awesome!
- `ReactDOM.render...` - This line calls the render function inside of `ReactDOM` and attaches our `<App />` component to the element with `id=app`. Take a peek in the index.html file. Shouldn't be too hard to find it.

## Counter Component

In this example we'll start with an already scaffolded out control. The goal of our counter is to track how many times the counter button is clicked. In the past JavaScript demo we might have accessed the counter element using `document.querySelector('.counter')` and manually incremented the number found there. While using the DOM as your data store works, it's REALLY hard to scale past the most basic demo.

React solves this by allowing each control to specify its own data store, called **state**. We can reference values in state when we render our UI, and we can also update state over the lifetime of our application.

### Adding State

JavaScript uses a `constructor` method to instantiate each copy of a class. So for class-based controls, this is where we define an initial value for `state`.

```js
constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
```

- The constructor takes in the component's props (values passed into the control).
- The [`super()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super) function calls the constructor of the parent class (in this case `React.Component`) to do any shared setup.
- Now we can define any state variables we want to use in the control and give them a default value. Our counter value can now be accessed via `this.state.counter`. Later, we can update state by calling `this.setState({ counter: 1 })`.

#### Using [object destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring) for props and state

Both `props` are `state` are JavaScript objects. They have a bunch of key/value pairs in them which you can access via `this.props.foo` or `this.state.bar`. Sometimes they have MANY values inside of them which you need access to. You could do this:

```js
let cat = this.props.cat;
let dog = this.props.dog;
let bird = this.props.bird;
let pig = this.props.pig;
let cow = this.props.cow;
```

> Note that we access `props` and `state` on `this`, which is how you reference all class properties and methods.

But this is verbose and repetitive. Instead you can use destructuring to turn this into a one-liner.

```js
let { cat, dog, bird, pig, cow } = this.props;
```

Even though this isn't 100% necessary today, it does future-proof our code if we add more values to `props` or `state` later. So let's add this inside of the `render` method, above the `return`:

```js
const { counter } = this.state;
const { text } = this.props;
```

### Adding JSX

```jsx
return (
  <div>
    {text}: {counter}
    <button>Click</button>
  </div>
);
```

Each JSX return value needs to be a single element, so start with a wrapping `<div>`. Inside of that we can add the `text` we get from `this.props`, then after a colon, the `counter` we pulled in from `this.state`. This will render as the string `My Text Prop: 0`. After that let's add a button we'll use later.

Now let's see how we can use this component in our app.

### Updating the App to Use Counters

Before we can use our `Counter`, we need to import it into the App file.

```js
import { Counter } from './components/Counter';
```

Now that we have access to `Counter`, we can use it in the App just as if it were an HTML element.

```jsx
return (
  <div>
    <h2>My App</h2>
    <Counter text="Chickens" />
    <Counter text="Ducks" />
  </div>
);
```

> Note the capitalization of `Counter`. HTML might not be case-sensitive, but JSX is! A common practice is to use the capitalized names of HTML elements to name corresponding React components: Button, Select, Label, Form, etc.

## Exploring Component Props

Now that we've got two counters on our page, we can see that the string passed into the `text` attribute got passed into our counter and rendered on the page. Being able to pass values (props) into controls makes them more flexible and reusable. Props can be strings, numbers, booleans, and even arrays and objects.

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

### Writing our Button Click Handler

Our next step is to wire up the button to increment the `counter` in our component state. This will very similar to what we did in step 3, but instead of placing the function in a script tag, we can create it as a class method, and keep it out of the global scope.

> By convention we place other methods below render, and private methods (those for internal use only) are prefixed with an underscore.

This function will update our component's state, incrementing the counter value by 1. (Note that `setState` only modifies the values of keys listed in object passed as its parameter.)

```jsx
_onButtonClick = () => {
  this.setState(prevState => ({ counter: prevState.counter + 1 }));
};
```

> This isn't exactly a method, but a class property that is set to an [arrow function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions). This mostly works the same as `onButtonClick() { }` but eliminates the need for [extra boilerplate](https://medium.freecodecamp.org/this-is-why-we-need-to-bind-event-handlers-in-class-components-in-react-f7ea1a6f93eb) used to avoid potential "gotchas" with [how `this` works in JavaScript](https://codeburst.io/javascript-the-keyword-this-for-beginners-fb5238d99f85).)

Now that we have a function to increment our count, all that's left is to connect it to our button.

```jsx
<button onClick={this._onButtonClick}>Click</button>
```

> Note the syntax is a bit different than in HTML: `onclick="funcName()"` in HTML vs `onClick={this.funcName}` in JSX.

> Also note that each Counter maintains its own state! You can modify the state inside of one counter without affecting the others.

## Bonus: Using a Button component

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
