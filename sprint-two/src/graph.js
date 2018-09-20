

// Instantiate a new graph
var Graph = function() { //psuedoclassical constructor
    //list of nodes
    //list of edges (which connects where)
    //n x n (array), effectively a matrix
    //or an array of node objects
    //where nodes are {value: , connections: }
    this.verts={};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
    this.verts[node] = {};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
    return Boolean(this.verts[node]);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
    if(this.verts[node] !== undefined) {
        for(var key in this.verts[node]) {
            delete this.verts[key][node];
        }
        delete this.verts[node];
    }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
    return Boolean(this.verts[fromNode][toNode]);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
    this.verts[toNode][fromNode] = fromNode;
    this.verts[fromNode][toNode] = toNode;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
    delete this.verts[toNode][fromNode];
    delete this.verts[fromNode][toNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
    for(var key in this.verts) {
        cb.call(this, key);
    }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addnode O(1)
 * contains O(1)
 * removeNode O(n)
 * hasEdge O(1)
 * addEdge O(1)
 * removeEdge O(1)
 * forEachNode O(N)
 */


