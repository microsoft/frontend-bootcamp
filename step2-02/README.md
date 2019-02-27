# Step 2.2: UI Fabric Component Library

[Lessons](../) | [Exercise](./exercise/) | [Demo](./demo/)

UI Fabric is a Component Library that is developed to reflect the latest Microsoft design language. It is used in many Microsoft web applications and is developed in the open.

We'll talk about:

- What makes it good
- How to find it
- How to use it
- Laying out Apps with Stack

# What Makes It Good

- Fabric has been developed BOTH by developers and design engineers working together as a team
- Most notable Microsoft web products use it
- It is documented both from examples and generated from API (TypeScript) itself
- Components are highly customizable and themeable
- Comprehensive library
- Works with (aria) and augments (focus management) web accessibility standards
- Fully funded and well managed - shield rotation and lots of automation work
- Engineering is done in the open in github.com
- Engineering system is shared and re-usable by other teams

# How to Find It

github repo:
https://github.com/officedev/office-ui-fabric-react

Documentation can be found here:
https://developer.microsoft.com/en-us/fabric/#/components

# How to Use It

## Importing a Component

```jsx
import { DefaultButton } from 'office-ui-fabric-react';

const MyComponent = () => {
  return (
    <div>
      <DefaultButton>Hello World</DefaultButton>
    </div>
  );
};
```

## Customizing Behavior of Individual Component

Take a look at the documentation: https://developer.microsoft.com/en-us/fabric#/components/button

Let's say we want an Icon to be rendered with the Button Text, we'd use the `iconProps`

```js
import { DefaultButton } from 'office-ui-fabric-react';

const MyComponent = () => {
  return (
    <div>
      <DefaultButton iconProps={{ iconName: 'Mail' }}>Send Mail</DefaultButton>
    </div>
  );
};
```

## Render Props

Some Fabric components take in a render function like the TextField:

```js
import { TextField } from 'office-ui-fabric-react';

const MyComponent = () => {
  return (
    <div>
      <TextField onRenderPrefix={() => <Icon iconName="Search" />} />
      <TextField onRenderPrefix={() => 'hello world'} />
    </div>
  );
};
```

# Layout with Stack

Before we start, let's look at flexbox. It is really, really complex to use:

- a guide: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- a tool: http://the-echoplex.net/flexyboxes/
- did you know there were 3 or so flex box standards? i.e. Old links will have non-working code

Fabric's answer is: Stack

> A Stack is a container-type component that abstracts the implementation of a flexbox in order to define the layout of its children components.

The concepts are:

- direction
- grow
- wrap
- shrunk
- justify-content
- alignment

Stack abstracts these CSS and provides a type discoverable.

Checkout a cookbook of sorts in our documentation: https://developer.microsoft.com/en-us/fabric#/components/stack

# Exercise

1. Open up the [Documentation for DefaultButton](https://developer.microsoft.com/en-us/fabric/#/components/button)
2. Open up the TSX files inside `components/`
3. Replace the DOM tags with Fabric components in those TSX files with these components:

- Stack
- DefaultButton
- Checkbox
- TextField
- Pivot (for the filter)

# Bonus Exercise

GO WILD! There are so many components from the Fabric library! Try to put some components in the exercise component files. Try out these concepts that we have mentioned above:

- Importing components from `office-ui-fabric-react`
- Customizing component with props found on the documentation site
- Customize component with render props (these will be called onRender or something like that)
