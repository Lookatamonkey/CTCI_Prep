# 2. Add Two Numbers
def add_two_numbers(l1, l2)
    node1 = l1
    node2 = l2
    dummy = ListNode.new("dummy")
    node3 = dummy
    carry_over = 0
    
    until node1.nil? && node2.nil?
        x = node1 ? node1.val : 0
        y = node2 ? node2.val : 0
        summed = x + y + carry_over
        if summed >= 10
            summed %= 10
            carry_over = 1
        elsif summed < 10
            summed %= 10
            carry_over = 0
        end
        
        node3.next = ListNode.new(summed)
        node3 = node3.next
        node1 = node1 ? node1.next : nil 
        node2 = node2 ? node2.next : nil 
    end
    
    node3.next = ListNode.new(carry_over) if carry_over == 1
    dummy.next
end

def swap_pairs(head)
    return nil if head.nil?
    return head if head.next.nil?
    
    temp = head.next
    new_head = swap_pairs(head.next.next)
    temp.next = head
    head.next = new_head
    head = temp
    return head
end

def swap_pairs(head)
    return nil if head.nil?
    return head if head.next.nil?
    
    temp = head.next
    new_head = swap_pairs(head.next.next)
    temp.next = head
    head.next = new_head
    head = temp
    return head
end