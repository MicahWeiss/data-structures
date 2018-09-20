var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(Stack.prototype);
  someInstance.storage = {};
  someInstance._size = 0;
  
  return someInstance;
};

 var stackMethods = {
  push: function(value){
    this.storage[this._size] = value;//adds item to stack (highest number in storage obj)
    this._size++; 
  },
  pop: function(){
    let popped;
    if(this._size > 0){ 
      popped = this.storage[this._size - 1];
      delete this.storage[this._size - 1];
      this._size--;
    }
    return popped;
  },
  size: function(){
    return this._size;
  },

  constructor: Stack
 };

Stack.prototype = Object.create(stackMethods);

