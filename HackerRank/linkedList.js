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

