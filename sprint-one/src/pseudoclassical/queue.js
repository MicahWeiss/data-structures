var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this._size = 0;
};


 Queue.prototype.enqueue = function(value){
    for(var i=this._size-1; i>=0; i--) {
      this.storage[i+1] = this.storage[i];
    }
    this.storage[0] = value;
    this._size++;
  };
  
  Queue.prototype.dequeue = function(){
    if (this._size === 0) {
      return undefined;
    }

    var tmp = this.storage[this._size-1];
    delete this.storage[this._size-1];
    this._size--;
    return tmp;
  };

  Queue.prototype.size =  function(){
    return this._size;
  }
