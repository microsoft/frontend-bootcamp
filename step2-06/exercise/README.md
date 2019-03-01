# Step 2.6 - Redux: Dispatching actions and examining state (Exercise)

[Lessons](../) | [Exercise](./exercise/) | [Demo](./demo/)

## Visualize state changes with Chrome extension

If you still have `npm test` running from the previous step, stop it with `ctrl+C`. Start the app by running `npm start` from the root of the `frontend-bootcamp` folder. Click the "exercise" link under day 2 step 6.

1. Install the [Redux DevTools Chrome extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

2. Hit F12 (`cmd+option+I` on Mac) and open the inspector panel entitled **Redux**

3. Modify `exercise/src/index.tsx` to dispatch actions (you're not limited to adding todos; you can also remove and clear)

4. Explore the actions' effects using the extension

## Playing with dispatching actions inside tests

Stop the app using `ctrl+C` and start the tests by running `npm test`.

1. Open `exercise/src/reducers/reducer.spec.ts`

2. Follow the instructions to fill out the reducer tests
