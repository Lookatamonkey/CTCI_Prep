// 160. Intersection of Two Linked Lists
var getIntersectionNode = function(headA, headB) {
  if (headA === null || headB === null) {
    return null;
  }

  let lengthA = findLength(headA);
  let lengthB = findLength(headB);

  let diff = Math.abs(lengthA - lengthB);
  let longer = lengthA > lengthB ? headA : headB;
  let shorter = headA === longer ? headB : headA;

  while (diff > 0) {
    longer = longer.next;
    diff -= 1;
  }

  while (longer && shorter) {
    if (longer.val === shorter.val) {
      return longer;
    } else {
      longer = longer.next;
      shorter = shorter.next;
    }
  }

  return null;
};

var findLength = function(head) {
  let len = 1;
  while (head) {
    len += 1;
    head = head.next;
  }

  return len;
};

// #143 - Reorder List
var reorderList = function(head) {
  if (head === null || head.next === null) {
    return;
  }
  let node1 = head;
  let length = listLength(node1);

  // get to middle of Linked List
  for (let i = 1; i < length / 2; i++) {
    node1 = node1.next;
  }
  // splits the Linked List in half
  let node2 = node1.next;
  node1.next = null;
  node1 = head;
  node2 = reverseList(node2);

  merge(node1, node2);
};

function merge(node1, node2) {
  while (node2) {
    let temp1 = node1.next;
    let temp2 = node2.next;
    node1.next = node2;
    node1 = temp1;
    node2.next = node1;
    node2 = temp2;
  }
}

function listLength(node) {
  let count = 0;
  while (node) {
    count += 1;
    node = node.next;
  }
  return count;
}

function reverseList(head) {
  if (head === null) return head;
  let node = head;
  let tail = head.next;
  if (tail === null) return head;
  let temp = tail;
  head.next = null;

  while (tail) {
    temp = tail.next;
    tail.next = head;
    head = tail;
    tail = temp;
  }

  return head;
}

// 160. Intersection of Two Linked Lists
var getIntersectionNode = function(headA, headB) {
  let lenA = 0;
  let lenB = 0;
  let nodeA = headA;
  let nodeB = headB;
  while (nodeA) {
    lenA += 1;
    nodeA = nodeA.next;
  }
  while (nodeB) {
    lenB += 1;
    nodeB = nodeB.next;
  }

  while (lenA > lenB) {
    lenA -= 1;
    headA = headA.next;
  }
  while (lenB > lenA) {
    lenB -= 1;
    headB = headB.next;
  }
  while (headA && headB && headA.val !== headB.val) {
    headA = headA.next;
    headB = headB.next;
  }
  return headA ? headA : null;
};

var mergeKLists = function(lists) {
  if (lists.length <= 1) {
    return lists;
  }

  let left = mergeKLists(lists.slice(0, lists.length / 2));
  let right = mergeKLists(lists.slice(lists.length / 2));

  let merged = merge(left, right);
  return merged;
};
// 23. Merge k Sorted Lists
var mergeKLists = function(lists) {
  if (lists.length <= 1) {
    return lists;
  }

  let left = mergeKLists(lists.slice(0, lists.length / 2));
  let right = mergeKLists(lists.slice(lists.length / 2));

  let merged = merge(left, right);
  return merged;
};
// 23. Merge k Sorted Lists
var merge = function(left, right) {
  if (left && !right) {
    return left;
  }
  if (right && !left) {
    return right;
  }
  let res;
  if (left[0].val > right[0].val) {
    res = [left[0]];
    left[0] = left[0].next;
  } else {
    res = [right[0]];
    right[0] = right[0].next;
  }

  while (left[0] && right[0]) {
    if (left[0].val > right[0].val) {
      res[0].next = left[0];
      left[0] = left[0].next;
    } else {
      res[0].next = right[0];
      right[0] = right[0].next;
    }
  }

  if (left[0]) {
    res[0].next = left[0];
  } else if (right[0]) {
    res[0].next = right[0];
  }

  return res;
};

var test = function(node) {
  let arr = [];
  while (node[0]) {
    console.log("node: ", node);
    arr.push(node.val);
    node = node.next;
  }

  console.log("arr: ", arr);
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
