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
  }
};

//find: function(value) {
/*return the  that contains the item
    let currentNode = root
    if(value < currentNode.val){
         if(currentNode.left !== undefined){    
             currentNode = currentNode.left
         }else{
             return 
         }
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
