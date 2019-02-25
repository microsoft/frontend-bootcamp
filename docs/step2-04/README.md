# Step 2.4

[Lessons](../) | [Exercise](./exercise/) | [Demo](./demo/)

Testing Typescript code with jest. jest is a test framework made by Facebook and is very popular in the React and the wider JS ecosystem. We will work on implementing simple unit tests here in this exercise.

https://jestjs.io/

- Multi-threaded and isolated test runner
- Provides a "fake" browser environment if needed (window, document, DOM, etc).
- Snapshots: show API or large object changes along side code changes in pull requests
- Code coverage is integrated (--coverage)
- Very clear error messages of where the test failures occur

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

`mount` does a full mount of the component. You can use the `enzyme` wrapper to simulate clicks, etc:

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
