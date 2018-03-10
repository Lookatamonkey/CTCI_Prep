# Remove K from List
# def removeKFromList(l, k)
#     return nil if l.nil?
    
#     fast_node = l.next
#     slow_node = l
    
#     until slow_node.value != k
#         temp = slow_node.next
#         slow_node.next = nil
#         slow_node = temp
#         l = slow_node
#         return l if slow_node.nil?
#         fast_node = fast_node.next
        
#     end
    
    
#     until fast_node.nil?
#         if fast_node.value == k
#             slow_node.next = fast_node.next
#         else
#             slow_node = slow_node.next
#         end
#         fast_node = fast_node.next
#     end
    
#    l
# end
