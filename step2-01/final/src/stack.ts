export class Stack<T> {
  private _store: T[];

  constructor() {
    this._store = [];
  }

  push(elem: T): void {
    this._store.push(elem);
  }

  pop(): T {
    return this._store.pop();
  }
}
