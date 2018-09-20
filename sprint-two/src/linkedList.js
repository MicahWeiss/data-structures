var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if(list.tail === null){
      list.tail = Node(value);
      list.head = list.tail;
    } else {
     var newTail = Node(value);
     list.tail.next = newTail;
     list.tail = newTail;
    }
  };

  list.removeHead = function() {
    if( list.head === null){
      return null;
    } else {
      var temp = list.head.value;
      if (list.head.next !== null) {
        list.head = list.head.next;
      }
      return temp;
    }
  };

  list.contains = function(target) {
    if (list.head === null){
      return false;
    }

    var indexNode = list.head;
    
    while(indexNode !== null && indexNode.value !== target){
      indexNode = indexNode.next;
    }
    if(indexNode === null){
      return false;
    } else {
      return true;
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
