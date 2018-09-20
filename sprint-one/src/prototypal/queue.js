var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance._size = 0;
  
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

