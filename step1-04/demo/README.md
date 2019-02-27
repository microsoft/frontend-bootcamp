# Introduction To React

In our last example we saw how we could take a static HTML page and turn it into an interactive page with some buttons and their `onclick` handlers.

In this example we'll see how React turns that paradigm completely around. With React, the entire DOM is generated and maintained by JavaScript, directly inside the browser. This makes it easier to assemble your application out of reusable pieces, maintain state within a component, and pass data between them.

## Demo

In this demo we'll be creating a simple counter that will display a count and increment on click.

### The App

This is the starting point of our React application. It is a component just like the other ones we will be building, but this component will only ever be used once, to render the application. Here's how our app starts out. Let's walk through each line:

```jsx
import React from 'react';

export class App extends React.Component {
  render() {
    return (
      <div>
        <h2>My App</h2>
      </div>
    );
  }
}
```

- **import React from 'react';** - This is how we [import modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) in JavaScript. This line creates a variable in this file called `React` that is equal to the default `export` of the `react` npm module.
- **export class App** - Just like react exports code, our App component is nothing more than an exported "App" class. This allows us to import the class into other files
- **extends React.Component** - A JavaScript class is similar to other programming languages (it's a collection of methods and properties). Classes can also be extended, so when we create a React component class, we always extend the base React.Component class. Note that this `Component` class is coming from the `React` variable imported up top.
  > Note that `<any, any>` is necessary for TypeScript which we will touch on later
- **render()** - One of the methods defined by React.Component is the `render()` method. This is a function that defines the HTML the component is going to render.
- **return** - Remember that functions can return values in addition to side effects, and this component is no different.
- **Inside of the return?** It's HTML! Actually, it's JSX, but with very few exceptions you can treat it like HTML. A few key differences:
  1. Since 'class' is a reserved word in JavaScript, you will need to use className on your HTML tags `<div className="foo">`
  2. We can use custom HTML tags created by these render functions `<div><MyControl>hi</MyControl></div>`
  3. Controls can be self closing `<div><MyControl text='hi' /></div>`
  4. You can use JavaScript inside of JSX! If you declare `const name = 'Micah';` inside the render function, you can use that variable inside of your JSX `<div>{name}</div>` or `<div><MyControl text={name} /></div>`. Works with functions, loops, conditionals as well.

### index.tsx

This is the file that places your App onto the page.

> Note that to avoid build errors, this file has been renamed to index.temp. Change the name to index.tsx.

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
ReactDOM.render(<App />, document.getElementById('app'));
```

- **import ReactDOM from "react-dom";** - We've seen React imported before, but now we're also grabbing ReactDom from a package called "react-dom".
  > Note that this casing is intentional. NPM packages are kabab-case, exported items are usually camelCase or PascalCase. PascalCase is usually used for 'proper noun' exports. ProjectName, ComponentName etc.
- **import { App } from "./App";** - If we had exported our app like this: `export default class extends React.Component`, this line would look like the lines above - `import App from "./App";`. But React convention is to use named exports, which can easily be extracted like this `{ App }`.
  > This notation is called [object destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring), and it's awesome!
- **ReactDOM.render...** This line calls the render function inside of ReactDOM and attaches our `<App />` component to the element with `id=app`. Take a peak in the index.html file. Shouldn't be too hard to find it.

### Counter Component

In this example we'll start with an already scaffolded out control. The goal of our counter is to keep track of how many times the counter button is clicked. In the past JavaScript demo we might grab a reference to `document.querySelector('.counter')` and then manually increment the number we find there. While using the DOM as you data store works, it's REALLY hard to scale past the most basic demo.

React solves this by allowing each control to specify its own data store, called 'state'. We can reference values in state when we render our UI, and we can also update state over the lifetime of our application.

#### Adding State

JavaScript uses a `constructor` method to instantiate each copy of a class. So for class based controls, this is where we specify state.

```js
constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
```

- The constructor takes in the component props (values passed into the control).
- the [super()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super) function is called to gain access to some functionality in React.Component
- Now we can define any state variables we want to use in the control, and give them a default value. This counter value can now be accessed via `this.state.counter`. We can also update state by calling `this.setState({counter: 1})`

#### Using [object destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring) for props and state

Both props are state are JavaScript objects. They have a bunch of key value pairs in them which you can access via `this.props.foo` or `this.state.bar`. Sometimes they have **MANY** values inside of them which you need access to. You could do this:

```js
let cat = this.props.cat;
let dog = this.props.dog;
let bird = this.props.bird;
let pig = this.props.pig;
let cow = this.props.cow;
```

> Note that we access props and state on `this`, which is how you reference all of the class properties and methods

But this is verbose and repetitive. Instead you can use destructuring to turn this into a one liner.

```js
let { cat, dog, bird, pig, cow } = this.props;
```

So even though this isn't 100% necessary today, it does future proof our code if we add more props or state later. So let's add this inside of the render method, but above the return:

```js
const { counter } = this.state;
const { text } = this.props;
```

#### Adding JSX

```jsx
return (
  <div>
    {text}: {counter}
    <button>Click</button>
  </div>
);
```

Each JSX return needs to be a single element, so start with a wrapping `<div>`. Inside of that we can add the `text` we get from `this.props`, then after a colon, the `counter` we pulled in from `this.state`. This will render as the string `My Text Prop: 0`. After that let's add a button we'll use later. For now, we're going to see how we can use this in our app.

#### Updating the App to use Counters

Before we can use our `Counter`, we need to import it into the App file

```js
import { Counter } from './components/Counter';
```

Now that we have access to `Counter`, we can add it to the App just as if it were an HTML element.

```jsx
return (
  <div>
    <h2>My App</h2>
    <Counter text="Chickens" />
    <Counter text="Ducks" />
  </div>
);
```

> Note the capitalization of Counter. HTML might not be case sensitive, but JSX is! A common practice is to use the capitalized versions of HTML elements to name their JSX counterpart. Button, Select, Label, Form etc.

### Exploring Component Props

Now that we've got two Counters on our page, we can see that the string passed into the `text` attribute got passed into our Counter, and rendered on the page. Being able to pass values into controls make them more flexible and reusable. Props can be strings, numbers, booleans, and even arrays and objects.

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

> Note that all non string values are passed through as JavaScript by wrapping it in `{}`

### Writing our Button Click

Our next step is to wire up the button to increment the `counter` in our component state. This will very similar to what we did in step 3, but instead of placing the function in a script tag, we can create it as a class method, and keep it out of the global scope.

> By convention we place methods below render, and private methods (those for internal use only) are prefixed with an underscore.

```jsx
_onButtonCLick = () => {
  this.setState(prevState => ({ counter: prevState.counter + 1 }));
};
```

This function will update our component state, incrementing our counter value by 1. Note that setState only affects the values of keys we have listed.

> Note that this isn't exactly a method, but a property that is equal to a [arrow function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions). This works just as well as `onButtonClick() { }`, but doesn't require extra binding up in the constructor.

> Also note that `setState()` may update the state [asynchronously](https://reactjs.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous). If the next state depends on the previous state or props, then we should use the second form of `setState()` which takes a function that receives the previous state as the first argument and the props as the second.

Now that we have a function to increment out count, all that we have left is to connect it to our button.

```jsx
<button onClick={this._onButtonCLick}>Click</button>
```

> Note the syntax is a bit different than HTML. `onclick="funcName()"` vs `onClick={this.funcName}`

> Also note that each Counter maintains its own state! You can modify the state inside of one without affecting the others.

## Bonus: Using a Button component

Buttons are one of the most common components to write. They help abstract common styling, add icons or other decorations, and increase functionality (menu buttons etc). Using an existing Button component is as easy as importing it `import {Button} from './Button';` and replacing `<button></button>` with `<Button></Button>`. Let's take a quick look at Button to see how it came together.

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

- All controls need to import React (don't worry, only 1 copy ever gets into your app)
- Importing CSS files into the component means that the CSS is only loaded if the component is used
- React components can be created as a class **or** as a function. In this function, props are passed in as a function parameter.
  > Until recently, you could only access state in class based components. But with the advent of [hooks](https://reactjs.org/docs/hooks-intro.html) you can create stateful function components.
- Since this is a function, we don't have any methods, including `render()`. Just return your JSX as you would in a class based component.
- `props.children` is anything passed between the opening and closing tags `<Button>I'm children</Button>`
