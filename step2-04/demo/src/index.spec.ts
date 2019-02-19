import { square } from '.';

describe('jest example', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('should be able to give the square of two numbers', () => {
    console.log('test');
    expect(square(5)).toBe(25);
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
