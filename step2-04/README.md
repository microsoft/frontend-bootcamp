# Step 2.4: Testing TypeScript code with Jest

[Lessons](../) | [Exercise](./exercise/) | [Demo](./demo/)

[Jest](https://jestjs.io/) is a test framework made by Facebook and is very popular in the React and wider JS ecosystems.

In this exercise, we will work on implementing simple unit tests using Jest.

## Jest Features

- Multi-threaded and isolated test runner
- Provides a fake browser-like environment if needed (window, document, DOM, etc) using jsdom
- Snapshots: Jest can create text-based snapshots of rendered components. These snapshots can be checked in and show API or large object changes alongside code changes in pull requests.
- Code coverage is integrated (`--coverage`)
- Very clear error messages showing where a test failure occurred

## How to use Jest

- Using `create-react-app` or other project generators, Jest should already be pre-configured. Running `npm test` usually will trigger it!
- A `jest.config.js` file is used for configuration
- `jsdom` might not have enough API from real browsers, for those cases, polyfills are required. Place these inside `jest.setup.js` and hook up the setup file in `jest.config.js`
- in order to use `enzyme` library to test React Components, more config bits are needed inside `jest.setup.js`

## What does a test look like?

```ts
// describe(), it() and expect() are globally exported, so they don't need to be imported when jest runs these tests
describe('Something to be tested', () => {
  it('should describe the behavior', () => {
    expect(true).toBe(true);
  });
});
```

## Testing React components using Enzyme

[Enzyme](https://airbnb.io/enzyme/) is made by Airbnb and provides utilities to help test React components.

In a real app using ReactDOM, the top-level component will be rendered on the page using `ReactDOM.render()`. Enzyme provides a lighter-weight `mount()` function which is usually adequate for testing purposes.

`mount()` returns a wrapper that can be inspected and provides functionality like `find()`, simulating clicks, etc.

The following code demonstrates how Enzyme can be used to help test React components.

```tsx
import React from 'react';
import { mount } from 'enzyme';
import { TestMe } from './TestMe';

describe('TestMe Component', () => {
  it('should have a non-clickable component when the original InnerMe is clicked', () => {
    const wrapper = mount(<TestMe name="world" />);
    wrapper.find('#innerMe').simulate('click');
    expect(wrapper.find('#innerMe').text()).toBe('Clicked');
  });
});

describe('Foo Component Tests', () => {
  it('allows us to set props', () => {
    const wrapper = mount(<Foo bar="baz" />);
    expect(wrapper.props().bar).toBe('baz');
    wrapper.setProps({ bar: 'foo' });
    expect(wrapper.props().bar).toBe('foo');

    wrapper.find('button').simulate('click');
  });
});
```

## Advanced topics

### Mocking

Mocking functions is a large part of what makes Jest a powerful testing library. Jest actually intercepts the module loading process in Node.js, allowing it to mock entire modules if needed.

There are many ways to mock, as you'd imagine in a language as flexible as JS. We only look at the simplest case, but there's a lot of depth here.

To mock a function:

```ts
it('some test function', () => {
  const mockCallback = jest.fn(x => 42 + x);
  mockCallback(1);
  mockCallback(2);
  expect(mockCallback).toHaveBeenCalledTimes(2);
});
```

Read more about jest mocking [here](https://jestjs.io/docs/en/mock-functions.html).

### Async Testing

For testing async scenarios, the test runner needs some way to know when the scenario is finished. Jest tests can handle async scenarios using callbacks, promises, or async/await.

```ts
// Callback
it('tests callback functions', (done) => {
  setTimeout(() => {
    done();
  }, 1000);
});

// Returning a promise
it('tests promise functions', () => {
  return someFunctionThatReturnsPromise());
});

// Async/await (recommended)
it('tests async functions', async () => {
  expect(await someFunction()).toBe(5);
});
```

# Demo

## Jest basics

In this repo, we can start an inner loop development of tests with the command: `npm test`

Take a look at code inside `demo/src`:

1. `index.ts` exports a few functions for a counter as well as a function for squaring numbers. We'll use this last function to demonstrate how mocks work.

2. `multiply.ts` is a contrived example of a function that is exported

3. `index.spec.ts` is the test file

Note how tests are re-run when either test files or source files under `src` are saved.

# Exercise

## Basic testing

1. Run the tests by running `npm test` at the root of the bootcamp project

2. Look at `exercise/src/stack.ts` for a sample implementation of a stack

3. Follow the instructions inside `stack.spec.ts` file to complete the two tests

## Enzyme Testing

1. Open up `exercise/src/TestMe.spec.tsx`

2. Fill in the blank for the missing test using `enzyme` concepts introduced from the demo

3. Run tests with `npm test`
