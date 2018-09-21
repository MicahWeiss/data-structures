var BinarySearchTree = function(value) {
  var _tree = { value: value, left: undefined, right: undefined };
  Object.assign(_tree, treePrototype);
  return _tree;
};

var treePrototype = {
  insert: function(value) {
    var currentNode = this;

    while (value !== currentNode.value) {
      if (value < currentNode.value) {
        if (currentNode.left !== undefined) {
          currentNode = currentNode.left;
        } else {
          currentNode.left = {
            value: value,
            left: undefined,
            right: undefined
          };
          return;
        }
      } else if (value > currentNode.value) {
        if (currentNode.right !== undefined) {
          currentNode = currentNode.right;
        } else {
          currentNode.right = {
            value: value,
            left: undefined,
            right: undefined
          };
          return;
        }
      }
    }
    //DO NOTHING
  },

  contains: function(value) {
    var currentNode = this;
    while (value !== currentNode.value) {
      if (value < currentNode.value) {
        if (currentNode.left !== undefined) {
          currentNode = currentNode.left;
        } else {
          return false;
        }
      } else if (value > currentNode.value) {
        if (currentNode.right !== undefined) {
          currentNode = currentNode.right;
        } else {
          return false;
        }
      }
    }
    return true;
  },

  depthFirstLog: function(func) {
    var currentNode = this;

    function recursiveDFL(currentNode) {
      func(currentNode.value);
      if (currentNode.left !== undefined) {
        recursiveDFL(currentNode.left);
      }
      if (currentNode.right !== undefined) {
        recursiveDFL(currentNode.right);
      }
    }

    recursiveDFL(currentNode);
  },

  balanceTree: function() {
    var values = [];
    function pushVals(node) {
      values.push(node.value);
    }
    this.depthFirstLog(pushVals);
    values.sort();

    function recursiveBT(array) {
      let midpoint = Math.ceil(array.length / 2);
      this.insert(array[midpoint]);
      if (array.length > 1) {
        this.recursiveBT(array.slice(0, midpoint));
      }
      if (array.length > 2) {
        this.recursiveBT(array.slice(midpoint + 1, array.length));
      }
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * insert = best O(1), worst O(n)
 * contains = best O(1), worst O(n)
 * depthFirstLog = best O(n), worst O(n)
 */
