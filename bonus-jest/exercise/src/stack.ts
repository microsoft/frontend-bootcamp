export class Stack<T> {
  private _items: T[] = [];

  /** Add an item to the top of the stack. */
  push(item: T) {
    this._items.push(item);
  }

  /** Remove the top item from the stack and return it. */
  pop(): T {
    if (this._items.length > 0) {
      return this._items.pop();
    }
  }

  /** Return the top item from the stack without removing it. */
  peek(): T {
    if (this._items.length > 0) {
      return this._items[this._items.length - 1];
    }
  }

  /** Get the number of items in the stack/ */
  get count(): number {
    return this._items.length;
  }
}
