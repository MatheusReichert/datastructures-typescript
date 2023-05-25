export class Stack {
  private _items = new Array();

  private _topo: number = 0;

  constructor() {}

  public push(element: any) {
    this._items[this._topo] = element;
    this._topo++;
  }

  public pop() {
    this._topo--;
    return this._items[this._topo];
  }

  public peek() {
    return this._items[this._topo];
  }

  public isEmpty() {
    return this._topo === 0;
  }

  public clear() {
    this._topo = 0;
    this._items = new Array();
  }

  public size() {
    return this._topo;
  }
}
