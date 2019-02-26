# Step 2.4

[Lessons](../) | [Exercise](./exercise/) | [Demo](./demo/)

Testing TypeScript code with jest. jest is a test framework made by Facebook and is very popular in the React and the wider JS ecosystem. We will work on implementing simple unit tests here in this exercise.

https://jestjs.io/

# jest Features

- Multi-threaded and isolated test runner
- Provides a "fake" browser environment if needed (window, document, DOM, etc).
- Snapshots: show API or large object changes along side code changes in pull requests
- Code coverage is integrated (--coverage)
- Very clear error messages of where the test failures occur
- By default, will simulate a "good enough" browser environment called JSDOM

# How to use jest

- using `create-react-app` or other project generators, jest should already be preconfigured. Run `npm test` usually will trigger it!
- needs `jest.config.js`
- `jsdom` might not have enough API from real browsers, for those cases, polyfills are required. Place these inside `jest.setup.js` and hook up the setup file in `jest.config.js`
- in order to use `enzyme` library to test React Components, more config bits are needed inside `jest.setup.js`

# What does a test look like?

```ts
// describe(), it() and expect() are globally exported, so they don't need to be imported when jest runs these tests
describe('Something to be tested', () => {
  it('should describe the behavior', () => {
    expect(true).toBe(true);
  });
});
```

# Test React Components by using `enzyme`

- use `enzyme` to `mount()` the component (as oppose to rendering)
- the `mount()` function will return a wrapper that can be inspected
- the wrapper has functionality like `find()`, simulating clicks, etc.

```tsx
import React from 'react';
import { mount } from 'enzyme';
import { TestMe } from './TestMe';

describe('TestMe Component', () => {
  it('should have a non-clickable component when the origina InnerMe is clicked', () => {
    const wrapper = mount(<TestMe name="world" />);
    wrapper.find('#innerMe').simulate('click');
    expect(wrapper.find('#innerMe').text()).toBe('Clicked');
  });
});
```

# Advanced Topics

## Mocking

Mocking functions is a large part of what makes `jest` a powerful testing library. `jest` actually intercepts module inclusion process in `node.js` allowing it to mock entire modules if needed. There are many ways to mock as you can imagine in a language as flexible as JS. We only look at the simplest case but there's a lot of depth here.

To mock a function:

```ts
it('some test function', () => {
  const mockCallback = jest.fn(x => 42 + x);
  mockCallback(1);
  mockCallback(2);
  expect(mockCallback.mock.calls.length).toBe(2);
});
```

Read more about jest mocking here: https://jestjs.io/docs/en/mock-functions.html

## Async Testing

### callback

```ts
it('tests callback functions', (done) => {
  someFunctionThatCallsDone(done));
})
```

### promise

```ts
it('tests promise functions', () => {
  return someFunctionThatReturnsPromise());
})
```

### (recommended) async / await

```ts
it('tests async functions', async () => {
  expect(await someFunction()).toBe(5);
});
```

# Demo

## jest basics

In this repo, we can start an inner loop development of tests with the command: `npm test`

Take a look at code inside `demo/src`:

1. `index.ts` is exports a few functions for a counter as well as a test for squaring numbers but demonstrates out jest uses mocks

2. `multiply.ts` is a contrived example of a function that is exported

3. `index.spec.ts` is the test file: note how tests are re-run on save to test file changes as well as source code changes under `src`

## testing React applications

You can also test React Components with `jest` with the help of a partner library called `enzyme`. Take a look at the test below:

```ts
import { mount } from 'enzyme';

describe('Foo Component Tests', () => {
  it('allows us to set props', () => {
    const wrapper = mount(<Foo bar="baz" />);
    expect(wrapper.props().bar).toBe('baz');
    wrapper.setProps({ bar: 'foo' });
    expect(wrapper.props().bar).toBe('foo');
  });
});
```

`mount` does a full mount of the component. You can use the `enzyme` wrapper to simulate clicks, etc.:

```ts
wrapper.find('button').simulate('click');
```

# Exercise

## Basic Testing

1. Run the tests by running `npm test` at the root of the bootcamp project

2. Look at the `stack.ts` for a sample implementation of a stack

3. Follow the instructions inside the `stack.spec.ts` file to complete the two tests

## Enzyme Testing

1. Open up `exercise/src/TestMe.spec.tsx`

2. Fill in the blank for the missing test using `enzyme` concepts introduced from the demo

3. Run tests with `npm test`
