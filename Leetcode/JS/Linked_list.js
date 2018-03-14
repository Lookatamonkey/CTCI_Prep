var getIntersectionNode = function(headA, headB) {
    if (headA === null || headB === null) { return null; }
    
    let lengthA = findLength(headA);
    let lengthB = findLength(headB);
    
    let diff = Math.abs(lengthA - lengthB);
    let longer = lengthA > lengthB ? headA : headB;
    let shorter = headA === longer ? headB : headA;

    while (diff > 0) {
        longer = longer.next;
        diff -= 1;
    }
    
    while(longer && shorter) {
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