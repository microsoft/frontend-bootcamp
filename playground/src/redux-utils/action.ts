import { Action } from 'redux';

type ActionWithPayload<T, P> = Action<T> & P;

export function action<T extends string>(type: T): Action<T>;
export function action<T extends string, P>(type: T, payload: P): ActionWithPayload<T, P>;
export function action<T extends string, P>(type: T, payload?: P) {
  return { type, ...payload };
}

export type GenericActionMapping<A> = { [somekey in keyof A]: (...args: any) => Action<any> | ActionWithPayload<any, any> };
export type GenericActionTypes<A extends GenericActionMapping<A>> = ReturnType<A[keyof A]>['type'];
export type GenericAction<A extends GenericActionMapping<A>> = ReturnType<A[GenericActionTypes<A>]>;
export type GenericActionLookup<A extends GenericActionMapping<A>> = { [a in GenericActionTypes<A>]: ReturnType<A[a]> };
