var Stack = function() {
  var someInstance = {}; //big object that will be returned
  var storage = {}; 
  var size = 0;

  // Implement the methods below

  someInstance.push = function(value) {
    storage[size] = value;//adds item to stack (highest number in storage obj)
    size++;
  };

  someInstance.pop = function() {
    let popped;
    if(size > 0){ 
      popped = storage[size-1];
      delete storage[size-1];
      size--;
    }
    return popped;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
