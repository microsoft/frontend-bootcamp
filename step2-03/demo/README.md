# Step 2.3 - Theming and styling with UI Fabric (Demo)

[Lessons](../../) | [Exercise](../exercise/)

In this section, we will illustrate how to use some of the built-in theming and styling features of the UI Fabric component library.

These are the theming and styling methods that we will focus on in this step:

1. Theming using the `<Customizer>` component
2. Customizing themes and loading with `loadTheme()`
3. Customizing Fabric components via the `styles` prop
4. CSS-in-JS with `mergeStyles`

The first three methods only work with Fabric components, but the fourth, `mergeStyles`, can be used in other projects as well (and is typically not used within Fabric-based projects).

## 1. Applying Fabric themes using `<Customizer>`

One way to apply a theme is by wrapping the components to be themed with a `<Customizer>` component. `Customizer` propagates the theme down to children through the [React Context](https://reactjs.org/docs/context.html) mechanism.

There are some predefined themes within Fabric already, like Fluent (which will become the default in the next major release), MDL2, Azure, and some other sample themes like Teams.

The following code (simplified from `demo/src/components/TodoApp.tsx`) shows an example of applying the Fluent theme to our todo app using `Customizer`.

```jsx
import { Customizer } from 'office-ui-fabric-react';
import { FluentCustomizations } from '@uifabric/fluent-theme';

function render() {
  return (
    <Customizer {...FluentCustomizations}>
      <Stack>
        <TodoHeader />
        <TodoList />
        <TodoFooter />
      </Stack>
    </Customizer>
  );
}
```

## 2. Applying customized themes using `loadTheme()`

Another way to apply a theme is using the `loadTheme()` function. Themes loaded this way apply to the entire application.

To try out `loadTheme()` in our todo app, remove the `<Customizer>` tag from `TodoApp.tsx` and place this code in the module scope.

```ts
import { loadTheme } from 'office-ui-fabric-react';

loadTheme({
  palette: {
    themePrimary: '#0078d4',
    themeLighterAlt: '#eff6fc',
    themeLighter: '#deecf9',
    themeLight: '#c7e0f4',
    themeTertiary: '#71afe5',
    themeSecondary: '#2b88d8',
    themeDarkAlt: '#106ebe',
    themeDark: '#005a9e',
    themeDarker: '#004578',
    neutralLighterAlt: '#f8f8f8',
    neutralLighter: '#f4f4f4',
    neutralLight: '#eaeaea',
    neutralQuaternaryAlt: '#dadada',
    neutralQuaternary: '#d0d0d0',
    neutralTertiaryAlt: '#c8c8c8',
    neutralTertiary: '#c2c2c2',
    neutralSecondary: '#858585',
    neutralPrimaryAlt: '#4b4b4b',
    neutralPrimary: '#333333',
    neutralDark: '#272727',
    black: '#1d1d1d',
    white: '#ffffff'
  }
});
```

> If you'd like to create your own theme, the Fabric website has a [handy theme generator](https://aka.ms/themedesigner) to help get you started.

## 3. Customizing one Fabric control instance

If you just want to customize a single component instance's styling, Fabric components expose a `styles` prop (not to be confused with the React built-in one called `style`).

You can use intellisense to discover which parts of the component you can to customize.

The `styles` prop can take either an object, or a function which returns a style object based on the component's prop values.

The following code (simplified from `demo/src/components/TodoHeader.tsx`) demonstrates using `styles` to customize individual components. The TextField uses a style function and the PrimaryButton uses a style object.

```js
function render() {
  const buttonStyles = {
    root: { backgroundColor: 'maroon' },
    rootHovered: { background: 'green' }
  };

  const textFieldStyles = (props: ITextFieldStyleProps): Partial<ITextFieldStyles> => ({
    ...(props.focused && {
      field: {
        backgroundColor: '#c7e0f4'
      }
    })
  });

  return (
    <Stack>
      <Stack.Item>
        <TextField placeholder="What needs to be done?" styles={textFieldStyles} />
      </Stack.Item>
      <PrimaryButton styles={buttonStyles}>Add</PrimaryButton>
    </Stack>
  );
}
```

## 4. CSS-in-JS with `mergeStyles`

`mergeStyles` is a styling library that creates CSS class names from styles that are expressed as JavaScript objects. These classes can be used as the `className` prop of any component or element, such as `<div>`.

This is an advanced approach which also works outside of Fabric. Within Fabric-based apps, you would typically only use `mergeStyles` in certain niche scenarios. (Fabric itself uses `mergeStyles` under the hood to power some of its styling.)

Benefits of `mergeStyles` include:

- Works in any app
- Eliminates the need to import or bundle CSS stylesheets (all styles are bundled as normal JS code)
- Provides type checking for styles (like Sass) when used with TypeScript
- Very performant compared with other similar libraries

The following is a basic example using mergeStyles. ([This CodePen](https://codepen.io/dzearing/pen/jGdgrE?editors=1011) illustrates in more detail what `mergeStyles` does and includes some advanced examples.)

```jsx
// can also import from office-ui-fabric-react in Fabric-based apps
import { mergeStyles } from '@uifabric/merge-styles';

const blueBackgroundClassName = mergeStyles({
  backgroundColor: 'green'
});
const className = mergeStyles(blueBackgroundClassName, {
  padding: 50, // px is assumed if no units are given
  selectors: {
    ':hover': {
      backgroundColor: 'red'
    }
  }
});

const myDiv = <div className={className}>I am a green div that turns red on hover!</div>;
```
