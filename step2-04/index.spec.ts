import { square } from '.';

describe('square', () => {
  beforeEach(() => {
    console.log('this happens before each test');
  });

  afterEach(() => {
    console.log('this happens after each test');
  });

  it('should be able to give the square of two numbers', () => {
    console.log('test');
    expect(square(5)).toBe(25);
  });
});
