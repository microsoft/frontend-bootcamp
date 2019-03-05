# Step 2.2 - UI Fabric component library (Demo)

[Lessons](../../) | [Exercise](../exercise/)

[UI Fabric](https://developer.microsoft.com/en-us/fabric) is a component library that reflects the latest Microsoft design language. It is used in many Microsoft web applications and is [developed in the open](https://github.com/OfficeDev/office-ui-fabric-react).

We'll talk about:

- [What makes it good](#what-makes-it-good)
- [How to find it](#how-to-find-it)
- [How to use it](#how-to-use-it)
- [Laying out apps with Stack](#layout-with-stack)

## What makes it good

- Fabric has been developed BOTH by developers and design engineers working together as a team
- Most notable Microsoft web products use it
- It is documented both with examples and TypeScript API documentation
- Components are highly customizable and themeable
- Comprehensive library
- Works with assistive technologies and conforms to web accessibility standards for focus management
- Fully funded and well managed - shield rotation and lots of automation work
- Engineering is done in the open on GitHub
- Engineering system is shared and re-usable by other teams

## How to find it

GitHub repo:
https://github.com/officedev/office-ui-fabric-react

Documentation:
https://developer.microsoft.com/en-us/fabric/#/components

## How to use it

### Importing a component

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

### Customizing behavior of individual components

Take a look at the [Button documentation](https://developer.microsoft.com/en-us/fabric#/components/button).

From the documentation, we can see that if we want to render an icon along with the button's text, we can pass `iconProps` to the button:

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

### Customizing component rendering

Some Fabric components take in a render functions to allow customizing certain parts of the component. An example with TextField:

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

## Layout with Stack

Before we start, let's look at flexbox--a modern CSS layout method which is powerful, but really, really complex to use:

- A guide: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- A tool: http://the-echoplex.net/flexyboxes/
- Did you know there were three or so flexbox standards? (this means old articles may have non-working code)

Fabric's answer is: Stack.

**Stack** is a container-type component that abstracts the usage of flexbox to define the layout of its child components.

Flexbox uses CSS styles to control:

- direction
- grow
- shrink
- wrap
- justification
- alignment

Stack abstracts these CSS styles and provides typings to make them more discoverable.

Check out a cookbook of sorts in our [documentation](https://developer.microsoft.com/en-us/fabric#/components/stack).
