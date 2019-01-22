// #658 - Find Target
var findTarget = function(root, k) {
  if (root === null) {
    return false;
  }

  const set1 = new Set();
  return findPair(root, k, set1);
};

var findPair = function(root, k, set1) {
  if (root === null) {
    return false;
  }

  if (set1.has(k - root.val)) {
    return true;
  }
  set1.add(root.val);
  return findPair(root.left, k, set1) || findPair(root.right, k, set1);
};

// #226 - Invert Binary Tree
var invertTree = function(root) {
  if (root === null) {
    return null;
  }

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
  if ((p === null && q !== null) || (q === null && p !== null)) {
    return false;
  }
  if ((p === null) & (q === null)) {
    return true;
  }
  if (p.val !== q.val) {
    return false;
  }

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

var anotherSameTree = function(p, q) {
  if (p === null && q === null) {
    return true;
  }
  if (p === null || q === null) {
    return false;
  }
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
  if (root === null) {
    return total;
  }
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

var minHelperFunc = function(root, arr) {
  if (root === null) {
    return null;
  }

  let current = root.val;
  let left = minHelper(root.left, arr);
  let right = minHelper(root.right, arr);
  let tempDiff1;
  let tempDiff2;

  tempDiff1 = left ? current - left : null;
  tempDiff2 = right ? right - current : null;

  if (!arr[0]) {
    arr[0] = tempDiff1;
  }
  if (!arr[0]) {
    arr[0] = tempDiff2;
  }

  if (tempDiff1 && tempDiff1 < arr[0]) {
    arr[0] = tempDiff1;
  }
  if (tempDiff2 && tempDiff2 < arr[0]) {
    arr[0] = tempDiff2;
  }

  return root.val;
};

// 783 - Minimum distance between BST
var minDiffInBST = function(root) {
  if (root === null) {
    return null;
  }
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
  if (root === null) {
    return null;
  }

  minHelper(root.left, arr);
  let current = root.val;
  arr.push(current);
  minHelper(root.right, arr);
};

// 543 - Diameter of Binary Tree
var diameterOfBinaryTree = function(root) {
  if (root === null) {
    return 0;
  }

  let max = 0;
  let left = maxDepth(root.left);
  let right = maxDepth(root.right);

  if (left + right > max) {
    max = left + right;
  }

  let child1 = diameterOfBinaryTree(root.left);
  let child2 = diameterOfBinaryTree(root.right);
  if (child1 && child1 > max) {
    max = child1;
  }
  if (child2 && child2 > max) {
    max = child2;
  }

  return max;
};

var maxDepth = function(root) {
  if (root === null) {
    return 0;
  }

  let left = maxDepth(root.left);
  let right = maxDepth(root.right);

  return 1 + Math.max(left, right);
};

// 103. Binary Tree Zigzag Level Order Traversal
var zigzagLevelOrder = function(root) {
  if (root === null) {
    return [];
  }

  let queue1 = [root];
  let queue2 = [];
  let res = [];
  let shouldReverse = false;

  while (queue1.length > 0) {
    let temp = queue1.map(node => node.val);

    if (shouldReverse) {
      temp.reverse();
    }
    res.push(temp);
    for (let i = 0; i < queue1.length; i++) {
      if (queue1[i].left) {
        queue2.push(queue1[i].left);
      }
      if (queue1[i].right) {
        queue2.push(queue1[i].right);
      }
    }

    queue1 = queue2;
    queue2 = [];
    shouldReverse = !shouldReverse;
  }

  return res;
};

// 199. Binary Tree Right Side View
var rightSideView = function(root) {
  if (root === null) {
    return [];
  }

  let queue1 = [root];
  let res = [];
  let queue2 = [];
  while (queue1.length > 0) {
    // gets right-most val
    let rightMostVal = queue1[queue1.length - 1].val;
    res.push(rightMostVal);

    // emptys queue1 while filling queue2 with queue1's children
    while (queue1.length > 0) {
      let node = queue1.pop();
      if (node.right) {
        queue2.unshift(node.right);
      }
      if (node.left) {
        queue2.unshift(node.left);
      }
    }

    queue1 = queue2;
    queue2 = [];
  }
  return res;
};

// 101. Symmetric Tree
var isSymmetric = function(root) {
  if (!root) {
    return true;
  }
  return isSym(root.left, root.right);

  function isSym(left, right) {
    if (!left && !right) {
      return true;
    }
    if (left && !right) {
      return false;
    }
    if (right && !left) {
      return false;
    }

    if (left.val === right.val) {
      return isSym(left.left, right.right) && isSym(left.right, right.left);
    } else {
      return false;
    }
  }
};

// 701. Insert into a Binary Search Tree
var insertIntoBST = function(root, val) {
  const node = root;
  let foundPlace = false;
  while (foundPlace) {
    if (root.val > val) {
      if (root.left === null) {
        root.left = new TreeNode(val);
        foundPlace = true;
      } else {
        root = root.left;
      }
    } else {
      if (root.right === null) {
        root.right = new TreeNode(val);
        foundPlace = true;
      } else {
        root = root.right;
      }
    }
  }
  return node;
};

// 687. Longest Univalue Path
var longestUnivaluePath = function(root) {
  let ans = 0;
  
  const arrowLength = node => {
    if (!node) return 0;
    
    let leftLength = arrowLength(node.left);
    let rightLength = arrowLength(node.right);
    let leftArrow = 0;
    let rightArrow = 0;
    
    if (node.left && node.left.val === node.val) {
      leftArrow = leftLength + 1
    }
    if (node.right && node.right.val === node.val) {
      rightArrow = rightLength + 1
    }
    ans = Math.max(ans, leftArrow + rightArrow);
    return Math.max(leftArrow, rightArrow);
  }
  
  arrowLength(root);
  return ans;
};