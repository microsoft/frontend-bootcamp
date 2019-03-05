# Step 2.3 - Theming and styling with UI Fabric (Exercise)

[Lessons](../../) | [Demo](../demo/)

If you don't already have the app running, start it by running `npm start` from the root of the `frontend-bootcamp` folder. Click the "exercise" link under day 2 step 3 to see results.

## Applying Fabric themes

Try applying some predefined themes from UI Fabric packages inside the TodoApp under `exercise/src/components/TodoApp.tsx`. Do this by replacing:

```ts
import { FluentCustomizations } from '@uifabric/fluent-theme';
```

with:

```ts
import { TeamsCustomizations } from '@uifabric/theme-samples';
```

## Applying customized themes

1. Create your own theme using the [theme generator](https://developer.microsoft.com/en-us/fabric#/styles/themegenerator) and copy the generated code.

2. In `exercise/src/components/TodoApp.tsx`, delete the `Customizer` component.

3. Paste in the generated theme code before the `TodoApp` component definition.

4. Play around with the values and use VS Code's intellisense to discover more properties of the `ITheme` type.

## Customizing one Fabric control instance

1. Open `exercise/src/components/TodoFooter.tsx`

2. Find the `<DefaultButton>` and insert a `styles` prop

3. Try to customize this with a styles object (let the Intellisense of VS Code guide you on what you can use to customize)

4. Try to customize this with a styles function

## CSS-in-JS with `mergeStyles`

As mentioned in the demo, this is an advanced approach which also works outside of Fabric. You wouldn't typically use this approach within a Fabric-based app.

1. Try generating a class name using `mergeStyles` and use it as a `className` prop inside `TodoApp`

```jsx
import { mergeStyles } from 'office-ui-fabric-react';

const className = mergeStyles({
  backgroundColor: 'red',
  selectors: {
    ':hover': {
      backgroundColor: 'blue'
    }
  }
});
```

2. Try to give a few components extra padding
