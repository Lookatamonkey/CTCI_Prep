// Print elements of linked list
function print(head) {
    let node = head;
    while (node !== null) {
        console.log(node.data);
        node = node.next;
    }
}

// Insert a Node at the Tail of a Linked List

function insert(head, data) {
    if (head === null) {
        head = new Node(data);
    } else {
        let node = head;
        while (node.next !== null) {
            node = node.next;        
        }
        node.next = new Node();
        node.next.data = data;
    }
    return head;
}

// Insert a node at the head of a linked list

function insert(head, data) {
    if (head === null) {
        head = new Node(data);
    } else {
        let node = head;
        head = new Node(data);
        head.next = node;
    }
    
    return head;
}

// Insert a node at a specific position in a linked list

function insert(head, data, position) {
    let counter = 0;
    let node = head;
    let insert = new Node(data);
    
    if (position === 0) {
        if (head) {
            insert.next = head;
        }
        head = insert;
    } else {
        while (counter + 1 !== position) {
            node = node.next;
            counter += 1;
        }
        if (node.next !== null) {
            insert.next = node.next;
        }
        node.next = insert;
    }
    return head;
}

// Delete a Node

function deleteNode(head, position) {
    let counter = 0;
    let node = head;
    
    if (position === 0) {
        head = node.next;    
    } else {
        while (counter + 1 !== position) {
            node = node.next;
            counter += 1;
        }
        if (node.next) {
            if (node.next.next) {
                node.next = node.next.next;        
            } else {
                node.next = null;
            }
        }    
    }
    return head;
}

// Reverse Print Linked List
function reversePrint(head) {
    let node = head;
    if (node === null) {
            return null;
    } else {
        let fast = node.next;
        node.next = null;
        while (fast) {
            let temp = fast;
            fast = fast.next;
            temp.next = node;
            node = temp;
        }
    }
   while (node !== null) {
     console.log(node.data);
     node = node.next;
   }
}

// Reverse Linked List
function reverseLinkedList(head) {
    let node = head;
    if (node === null) {
            return null;
    } else {
        let fast = node.next;
        node.next = null;
        while (fast) {
            let temp = fast;
            fast = fast.next;
            temp.next = node;
            node = temp;
        }
    }
    return node;
}

// Compare Linked Lists
function compareLinkedLists( headA, headB) {
    let nodeA = headA;
    let nodeB = headB;
    while (nodeA !== null || nodeB !== null) {
        if ((nodeA === null && nodeB !== null || nodeA !== null && nodeB === null) || (nodeA.data !== nodeB.data)) {
            return 0;
        }
        nodeA = nodeA.next;
        nodeB = nodeB.next;
    }
    return 1;
}

// Merge Linked List

function mergeLinkedLists( headA, headB) {
    let nodeA = headA;
    let nodeB = headB;
    let current = null;
    let head = null;
    
    if ( nodeA === null ) {
        return nodeB;
    } else if (nodeB === null) {
        return nodeA;
    }
    
     if (nodeA.data > nodeB.data) {
         current = nodeB;
         nodeB = nodeB.next; 
     } else {
         current = nodeA;
         nodeA = nodeA.next; 
     }
   
    head = current; 
    while (nodeA !== null && nodeB !== null) {
        if (nodeA.data > nodeB.data) {
            current.next = nodeB;
            current = current.next;
            nodeB = nodeB.next;
        } else {
            current.next = nodeA;
            current = current.next;
            nodeA = nodeA.next;
        }
    }
    
    if (nodeA !== null) {
        current.next = nodeA;
    } else if (nodeB !== null) {
        current.next = nodeB;
    }
    
    return head;
}

