export class Stack<T> {
  private _items: T[] = [];

  push(item: T) {
    this._items.push(item);
  }

  pop(): T {
    if (this._items.length > 0) {
      return this._items.pop();
    }
  }
}
