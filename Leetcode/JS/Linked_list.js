var getIntersectionNode = function (headA, headB) {
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

var findLength = function (head) {
    let len = 1;
    while (head) {
        len += 1;
        head = head.next;
    }

    return len;
};

// #143 - Reorder List
var reorderList = function (head) {
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