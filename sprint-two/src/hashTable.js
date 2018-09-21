var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  //collision handling
  while (
    this._storage.get(index) !== undefined &&
    this._storage.get(index)[0] !== k
  ) {
    index++;
    index = index % this._limit;
  }
  //output
  this._storage.set(index, [k, v]);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //collision handling
  while (
    this._storage.get(index) !== undefined &&
    this._storage.get(index)[0] !== k
  ) {
    index++;
    index = index % this._limit;
  }

  //output
  if (this._storage.get(index) !== undefined) {
    return this._storage.get(index)[1];
  } else {
    return undefined;
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
