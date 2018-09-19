var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = { //big object that will be returned
    storage : {}, 
    _size : 0,
  };
  Object.assign(someInstance, queueMethods); 
  return someInstance;
};

var queueMethods = {
  enqueue: function(value){
    for(var i=this._size-1; i>=0; i--) {
      this.storage[i+1] = this.storage[i];
    }
    this.storage[0] = value;
    this._size++;

  },
  dequeue: function(){
    if (this._size === 0) {
      return undefined;
    }

      var tmp = this.storage[this._size-1];
      delete this.storage[this._size-1];
      this._size--;
      return tmp;
  },
  size: function(){
    return this._size;
  }  
};
