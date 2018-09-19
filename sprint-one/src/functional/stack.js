var Stack = function() {
  var someInstance = {}; //big object that will be returned

  // Use an object with numeric keys to store values
  var storage = {}; //mjw- is this gonna be someInstance[storage] = {1: a, 2: blargle, 3: blargles}?
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    //adds item to stac (highest number in storage obj)
    //size++
  };

  someInstance.pop = function() {
    //removes item -- (makes highest number key in storage have undefined value)
  };

  someInstance.size = function() {
  };

  return someInstance;
};
