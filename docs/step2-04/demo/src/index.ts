import { multiply } from './multiply';

let counter = 0;

export function getCount() {
  return counter;
}

export function increment() {
  return ++counter;
}

export function decrement() {
  return --counter;
}

export function square(x: number) {
  return multiply(x, x);
}
