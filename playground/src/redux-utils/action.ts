import { Action } from 'redux';

type ActionWithPayload<T, P> = Action<T> & P;

export function action<T extends string>(type: T): Action<T>;
export function action<T extends string, P>(type: T, payload: P): ActionWithPayload<T, P>;
export function action<T extends string, P>(type: T, payload?: P) {
  return { type, ...payload };
}
