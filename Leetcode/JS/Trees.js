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

// #538 - Convert BST to Greater Tree
var convertBST = function(root) {    
    findTotal(root);
    return root;
};

var findTotal = function(root, total = 0) {
    if (root === null) { return total; }
    total = findTotal(root.right, total);
    root.val += total;
    let left = findTotal(root.left, root.val);

    return left;
};

// Min Diff between parent and child nodes
var minDiff = function(root) {
    let arr = [null];
    minHelperFunc(root, arr);

    return arr[0];
};
        
var minHelperFunc = function( root, arr ) {
    if (root === null) { return null; }
    
    let current = root.val;
    let left = minHelper(root.left, arr);
    let right = minHelper(root.right, arr);
    let tempDiff1;
    let tempDiff2;
    
    tempDiff1 = (left ? (current - left) : null);
    tempDiff2 = (right ? (right - current) : null);
    
    if (!(arr[0])) { 
        arr[0] = tempDiff1; 
    }
    if (!(arr[0])) { 
        arr[0] = tempDiff2; 
    }
    
    if (tempDiff1 && tempDiff1 < arr[0]) { arr[0] = tempDiff1; }
    if (tempDiff2 && tempDiff2 < arr[0]) { arr[0] = tempDiff2; }
    
    return root.val;
};

// 783 - Minimum distance between BST
var minDiffInBST = function(root) {
    if ( root === null ) { return null; }
    let arr = [];
    minHelper(root, arr);
    
    let min = arr[1] - arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] < min) {
            min = arr[i] - arr[i - 1];
        }
    }
    
    return min;
};
        
var minHelper = function(root, arr) {
    if ( root === null ) { return null; }
    
    minHelper(root.left, arr);
    let current = root.val; 
    arr.push(current);
    minHelper(root.right, arr);
    
    
};