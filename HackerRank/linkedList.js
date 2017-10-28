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

