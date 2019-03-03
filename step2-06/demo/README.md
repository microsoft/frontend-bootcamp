# Step 2.6: Redux: React Binding (Demo)

[Lessons](../) | [Exercise](./exercise/) | [Demo](./demo/)

In this step, we will continue with Redux. Step 2.5 code can be used with any other web frameworks. This step, we will hook up the Redux store with React components. There are as many ways to bind Redux to React as number of stars in the sky. Being a tad bit opinionated in this bootcamp, we picked `react-redux-hooks` for its ease of use and the fact that it is another project from Facebook. You might want to investigate other packages, such as the [`react-redux`](https://react-redux.js.org/) project.

We will demonstrate how to use `react-redux-hooks` to pass down the Redux store to the views:

1. Provide the Store Context
2. Bind Redux store to Class Components
3. Bind Redux store to Functional Components

## Provide the Store Context

Class Components will access the Redux store via the `StoreContext` from `react-redux-hooks`. In Step 2.4, you saw how the context is hooked up. So, instead of providing our own context for Redux store, we just take one that is already been created. We need to first hook up the `<StoreContext.Provider>` component just like in Step 2.4.

```ts
const store = createStore(reducer, {}, composeWithDevTools());

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <TodoApp />
  </StoreContext.Provider>,
  document.getElementById('app')
);
```

## Bind Redux store to Class Components

Any class component needs access to the Redux store, we would set the `contextType` property of that component:

```ts
class TodoListItem extends React.Component {
  render() {
    const { todos } = this.context.getState();
    const dispatch = this.context.dispatch;

    return (...);
  }
}

TodoListItem.contextType = StoreContext;
```

The `dispatch()` function as well as the state tree can be retrieved this way. `getState()` is returned so you can retrieve the current snapshot of the state tree. This simply uses the standard React _context_ API where the value is the store itself.

## Bind Redux store to Functional Components

Inside a functional component, we use some of the API provided by `react-redux-hooks` itself. To get specific or all of the state tree, we use the `useMappedState` hook:

```ts
const { todos } = useMappedState(state => {
  todos: state.todos;
});
```

To dispatch actions, we need to retrieve this `dispatch()` function much the same way as the previous hook. We call `useDispatch()` hook:

```ts
const dispatch = useDispatch();
dispatch(action.addTodo('hello'));
```
