# Step 2.6: Redux: React Binding (Demo)

[Lessons](../) | [Exercise](./exercise/) | [Demo](./demo/)

Redux is currently the most popular Flux implementation, and the ecosystem of related libraries has grown as a result. This is one of the reasons why it is a very popular library within Microsoft products.

Various GitHub users have collected "awesome lists" of tech and articles related to Redux. Here is [one such list](https://github.com/xgrommx/awesome-redux#react---a-javascript-library-for-building-user-interfaces), but it is literally impossible to list out all the related tech.

In this step, we will continue with Redux. Step 2.5 code can be used with any other web frameworks. This step, we will hook up the Redux store with React components. The official way to do this is with the the [`react-redux`](https://react-redux.js.org/) library.

We will demonstrate how to use `react-redux` to pass down the Redux store to the views:

1. Providing the Store to the Views
2. Mapping the Redux store to props

## Provide the Store Context

Class Components will access the Redux store via the `StoreContext` from `react-redux-hooks`. In Step 2.4, you saw how the context is hooked up. So, instead of providing our own context for Redux store, we just take one that is already been created. We need to first hook up the `<StoreContext.Provider>` component just like in Step 2.4.

```js
const store = createStore(reducers);

const App = () => {
  return (
    <Provider store={store}>
      <div>Hello World!</div>
    </Provider>
  );
};
```

## Mapping the Redux store to props

`react-redux` exports the [`connect()`](https://react-redux.js.org/api/connect) function that maps portions of the state tree and dispatch functions into props in the child React component. Let's look at how that is done.

```js
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

So, that's a lot to digest. We'll go through these different parts:

1. First, the `<MyComponent>` is simple component that expects to have props, without any knowledge of Redux. It is just a plain React Component.

2. The `connect()` function takes in several arguments.

   - The first argument maps portions of the Redux _state tree_ into `<MyComponent>` _props_
   - The second arguments maps dispatch functions into `<MyComponent>` _props_

3. Finally, `connect()` actually returns a function that **decorates** a `<MyComponent>` into `<ConnectedComponent>` - it is a strange syntax, so do study it more closely here.

> Yes, `connect()` is a function that takes in functions as arguments that returns a function that takes in a component that return a component. Try to say this fast 10 times :)
