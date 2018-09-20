class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this._size = 0;
  }
  //methods
  enqueue(value){
    for(var i=this._size-1; i>=0; i--) {
      this.storage[i+1] = this.storage[i];
    }
    this.storage[0] = value;
    this._size++;
  };
  
  dequeue(){
    if (this._size === 0) {
      return undefined;
    }

    var tmp = this.storage[this._size-1];
    delete this.storage[this._size-1];
    this._size--;
    return tmp;
  };

  size(){
    return this._size;
  }
}