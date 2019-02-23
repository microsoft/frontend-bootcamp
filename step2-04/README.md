# Step 2.4

Testing Typescript code with jest. jest is a test framework made by Facebook and is very popular in the React and the wider JS ecosystem. We will work on implementing simple unit tests here in this exercise.

https://jestjs.io/

- Multi-threaded and isolated test runner
- Provides a "fake" browser environment if needed (window, document, DOM, etc).
- Snapshots: show API or large object changes along side code changes in pull requests
- Code coverage is integrated (--coverage)
- Very clear error messages of where the test failures occur

# Demo

In this repo, we can start an inner loop development of tests with the command: `npm test`

Take a look at code inside `demo/src`:

1. `index.ts` is exports a few functions for a counter as well as a test for squaring numbers but demonstrates out jest uses mocks

2. `multiply.ts` is a contrived example of a function that is exported

3. `index.spec.ts` is the test file: note how tests are re-run on save to test file changes as well as source code changes under `src`

# Exercise

1. Run the tests by running `npm test` at the root of the bootcamp project

2. Look at the `stack.ts` for a sample implementation of a stack

3. Follow the instructions inside the `stack.spec.ts` file to complete the two tests
