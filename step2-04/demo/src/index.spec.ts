import { square } from '.';
import { multiply } from './multiply';

// Mocked here by jest for the entire test module file
jest.mock('./multiply');

describe('jest example', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('should be passing in the multiple two of the same number', () => {
    square(5);

    // .toBeCalledTimes() and .toBeCalledWith() only work on mocks - we mocked the multiply function from the
    expect(multiply).toBeCalledTimes(1);
    expect(multiply).toBeCalledWith(5, 5);
  });

  it('should increment counter', () => {
    const { increment } = require('.');
    expect(increment()).toBe(1);
  });

  it('should decrement counter', () => {
    const { decrement } = require('.');
    expect(decrement()).toBe(-1);
  });

  it('should retrieve count', () => {
    const { decrement, getCount, increment } = require('.');
    increment();
    increment();
    decrement();
    increment();

    expect(getCount()).toBe(2);
  });
});
