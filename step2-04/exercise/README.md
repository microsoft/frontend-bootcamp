# Step 2.4 - React Context (Exercise)

[Lessons](../../) | [Demo](../demo/)

If you don't already have the app running, start it by running `npm start` from the root of the `frontend-bootcamp` folder. Click the "exercise" link under day 2 step 4 to see results.

## TodoContext.Provider component

1. Open `exercise/src/components/TodoApp.tsx`

2. Uncomment the missing functions inside the value prop

## TodoFooter: context inside functional component

1. Open `exercise/src/components/TodoFooter.tsx`

2. Use `useContext` to access the `TodoContext` and replace the two constants with values from the context

## TodoHeader: context inside class component

1. Open `exercise/src/components/TodoHeader.tsx`

2. Replace `onAdd` with a real implementation using the `this.context` object

3. Replace `onFilter` with a real implementation using the `this.context` object

4. Be sure to set the `contextType` of the TodoHeader component
