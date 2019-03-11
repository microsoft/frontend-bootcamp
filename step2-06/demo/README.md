# Step 2.6 - Redux: React binding (Demo)

[Lessons](../../) | [Exercise](../exercise/)

Redux is currently the most popular Flux implementation, and the ecosystem of related libraries has grown as a result. This is one of the reasons why it is a very popular library within Microsoft products.

Various GitHub users have collected "awesome lists" of tech and articles related to Redux. Here is [one such list](https://github.com/xgrommx/awesome-redux#react---a-javascript-library-for-building-user-interfaces), but it is literally impossible to list out all the related tech.

In this step, we introduce one useful library that works with Redux: [`react-redux`](https://react-redux.js.org/). Whereas the Step 2.5 code could be used with any web UI framework, we'll now use `react-redux` to connect the store to our React app. There are two steps in this process:

1. Providing the store to the views
2. Mapping the store to props

## Provide the store context to the views

Class components will access the Redux store via the [`<Provider>`](https://react-redux.js.org/api/provider) from `react-redux`. Under the hood, `react-redux` uses the context API to pass the store to the descendant components.

```jsx
const store = createStore(reducers);

const App = () => {
  return (
    <Provider store={store}>
      <div>Hello World!</div>
    </Provider>
  );
};
```

## Mapping the store to props

`react-redux` also provides the [`connect()`](https://react-redux.js.org/api/connect) function, which maps portions of the state tree and dispatch functions into props for the child React component. Let's look at how that is done.

```jsx
import { connect } from 'react-redux';

const MyComponent = props => {
  return <div>
    {props.prop1}
    <button onClick={props.action1()}>Click Me</button>
  </div>;
};

const ConnectedComponent = connect(
  state => {
    prop1: state.key1,
    prop2: state.key2
  },
  dispatch => {
    action1: (arg) => dispatch(actions.action1(arg)),
    action2: (arg) => dispatch(actions.action2(arg)),
  }
)(MyComponent);
```

So, that's a lot to digest. We'll go through the different parts:

1. `<MyComponent>` is simple component that expects to have props, without any knowledge of Redux. It is just a plain React component.

2. The `connect()` function takes in several arguments.

   - The first argument maps portions of the Redux _state tree_ into `<MyComponent>` _props_
   - The second arguments maps dispatch functions into `<MyComponent>` _props_ (typically used as callbacks to respond to user interaction)

3. Finally, `connect()` actually returns a function, which we immediately call to **decorate** `<MyComponent>` into `<ConnectedComponent>` - it is a strange syntax, so do study it more closely here.

> Yes, `connect()` is a function that takes in functions as arguments and returns a function that takes in a component and returns a component. Try to say this fast 10 times. :)

## A note on performance

Some folks going through this bootcamp cannot wait to start making screaming fast apps with Redux. Performance isn't free, and it certainly isn't with Redux. Try going through these links to get started on that topic:

https://github.com/markerikson/react-redux-links/blob/master/react-performance.md#redux-performance
