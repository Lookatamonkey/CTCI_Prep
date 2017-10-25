require 'set'

# With buffer
def remove_dups(root_node)
    uniq_nodes = Set.new
    n = root_node    
    prev = n
    while n != null    
        if !(uniq_nodes.include?(n))
            uniq_nodes.add(n)
        else
            prev.next = n.next
        end
        n = n.next
    end
end
