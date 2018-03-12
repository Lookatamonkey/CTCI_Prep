Remove K from List
def removeKFromList(l, k)
    return nil if l.nil?
    
    fast_node = l.next
    slow_node = l
    
    until slow_node.value != k
        temp = slow_node.next
        slow_node.next = nil
        slow_node = temp
        l = slow_node
        return l if slow_node.nil?
        fast_node = fast_node.next
        
    end
    
    
    until fast_node.nil?
        if fast_node.value == k
            slow_node.next = fast_node.next
        else
            slow_node = slow_node.next
        end
        fast_node = fast_node.next
    end
    
   l
end

def isListPalindrome(l)
    return true if l.nil?
    
    list_length = 1
    node = l
    
    # finds length
    until node.nil?
        list_length += 1
        node = node.next
    end
    
    # reset node
    node = l
    # move to center of linked list
    second_head = node.next
    second_tail = node
    (list_length / 2).times do |i|
        second_head = second_head.next
        second_tail = second_tail.next
    end
    
    (list_length / 2.0).ceil.times do |i|
        temp = second_head.next
        second_head.next = second_tail
        second_tail = second_head
        second_head = temp
    end

    p l
   true 
end