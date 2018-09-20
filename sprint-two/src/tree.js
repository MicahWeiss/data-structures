var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = []; 
  Object.assign(newTree, treeMethods);
  return newTree;
};

var treeMethods = {
  addChild : function(value) {
    var child = Tree(value);
    this.children.push(child);
  },

  contains : function(target) {
    var found = false;
    var searchTree = function(treeNode, target){
      if(treeNode.value === target){
        found = true;
      }
      for(var i=0; i < treeNode.children.length && found===false; i++){
        searchTree(treeNode.children[i], target);
      }
    }
    searchTree(this, target);
    return found;
  }
}


/*
 * Complexity: What is the time complexity of the above functions?
 * addChild = O(n)
 * contains = O(n)
 */
