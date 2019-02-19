describe('reducers', () => {
  it('should listen to addTodo message', () => {
    const store = createStoreWithDevTool(reducer, {});

    console.log(store.getState());

    store.dispatch(actions.addTodo('hello'));
    store.dispatch(actions.addTodo('world'));
  });
});
