# Step 2.5 - Redux: The Store (Exercise)

[Lessons](../../) | [Demo](../demo/)

If you don't already have the app running, start it by running `npm start` from the root of the `frontend-bootcamp` folder. Click the "exercise" link under day 2 step 5 to see results.

1. First, take a look at the store interface in `exercise/src/store/index.ts`. Note that the `Store` interface has two keys: `todos` and `filter`. We'll concentrate on `todos`, which is an object where the keys are string IDs and the values are of type `TodoItem`.

2. Open `exercise/src/reducers/index.ts` and fill in the missing reducer implementations.

3. Open `exercise/src/index.tsx` and write some `dispatch` calls.

4. Take a look what is written in the console (F12 on PC, `cmd-option-I` on Mac).

5. Install the Redux DevTools [Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) or [Firefox](https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/) extension

6. Observe the state changes and try doing "time travel"
