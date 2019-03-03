# Step 2.6: Redux: React Binding (Exercise)

[Lessons](../) | [Exercise](./exercise/) | [Demo](./demo/)

## Bind Redux Store with Class Component

1. Open `exercise/src/components/TodoHeader.tsx`.

2. Just like the 2.4 exercise, implement `onAdd` and `onFilter` using `this.context.dispatch()` calls to dispatch actions.

## Bind Redux Store with Functional Component

1. Open `exercise/src/components/TodoFooter.tsx`.

2. Follow the instructions in the file to replace the `todos` const using the `useMappedState()` hook.

3. Retrieve the dispatch function with `useDispatch()` hook.
