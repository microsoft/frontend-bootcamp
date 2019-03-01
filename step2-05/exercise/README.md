# Step 2.5: Redux: Reducers (Exercise)

[Lessons](../) | [Exercise](./exercise/) | [Demo](./demo/)

If you still have the app running from a previous step, stop it with `ctrl+c`. Start the tests instead by running `npm test` from the root of the `frontend-bootcamp` folder.

1. First, take a look at the store interface in `exercise/src/store/index.ts`. Note that the `Store` interface has two keys: `todos` and `filter`. We'll concentrate on `todos`, which is an object where the keys are string IDs and the values are of a `TodoItem` type.

2. Open `exercise/src/reducers/pureFunctions.ts` and fill in the missing function bodies.

3. Open `exercise/src/reducers/index.ts` and fill in the missing case statements for the switch on `action.type`.

4. Open `exercise/src/reducers/pureFunctions.spec.ts` and implement tests for the functions you wrote for `remove`, `complete`, and `clear`.
