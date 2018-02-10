// #658 - Find Target 
var findTarget = function(root, k) {
    if (root === null) { return false; }
    
    const set1 = new Set();  
    return findPair(root, k , set1);
};

var findPair = function(root, k, set1) {
    if (root === null) { return false; }
    
    if (set1.has(k - root.val)) { return true; }
    set1.add(root.val);
    return findPair(root.left, k, set1) || findPair(root.right, k, set1);
};

// #226 - Invert Binary Tree
var invertTree = function(root) {
    if (root === null) { return null; }
    
    inverter(root);
    invertTree(root.left);
    invertTree(root.right);
    
    return root;
};

var inverter = function(root) {
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
};

// 100 - Same Tree
var isSameTree = function(p, q) {
    if ((p === null && q !== null) || (q === null && p !== null)) { return false; }
    if (p === null & q === null) { return true; }
    if (p.val !== q.val) { return false; }
    
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

var anotherSameTree = function(p, q) {
        if ((p === null) && (q === null)) { return true; }
        if ((p === null) || (q === null)) { return false; }
        if (p.val === q.val) {
            return anotherSameTree(p.left, q.left) && anotherSameTree(p.right, q.right);
        } else {
            return false;
        }
    };