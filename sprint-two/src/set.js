var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; 
  return set;
};

var setPrototype = {
  add : function(item) {
    this._storage[item]=item;
  },
  
  contains : function(item) {
    return Boolean(this._storage[item]);
  },
  
  remove : function(item) {
    delete this._storage[item];
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 * everything is O(1)
 */


