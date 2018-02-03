# Merge Two Binary Trees
def merge_trees(t1, t2)
    return t2 if t1 == nil
    return t1 if t2 == nil
    
    t1.val += t2.val
    t1.left = merge_trees(t1.left, t2.left)
    t1.right = merge_trees(t1.right, t2.right)
    t1
end

# Trim a Binary Search Tree
def trim_bst(root, l, r)
    return nil if root == nil 
    
    if root.val < l
        root = trim_bst(root.right, l, r)
    elsif root.val > r
        root = trim_bst(root.left, l, r)
    else
        root.left = trim_bst(root.left, l, r)
        root.right = trim_bst(root.right, l, r)
    end
    root
end

# Average Level of Trees
def average_of_levels(root)
    queue1 = []
    queue2 = []
    queue1.push(root)
    res = 0
    averages = []
    
    until queue1.empty? && queue2.empty?
        if !(queue1.empty?)
            divisor = queue1.length.to_f
            until queue1.empty?
                pop = queue1.shift()
                res += pop.val
                if (pop.left != nil)
                    queue2.push(pop.left)
                end
                if (pop.right != nil)
                    queue2.push(pop.right)            
                end
            end
        elsif !(queue2.empty?)
            divisor = queue2.length.to_f
            until queue2.empty?
                pop = queue2.shift()
                res += pop.val
                if (pop.left != nil)
                    queue1.push(pop.left)
                end
                if (pop.right != nil)
                    queue1.push(pop.right)
                end
            end
        end
        averages.push(res/divisor)    
        res = 0
    end
    averages
end

# BETTER Average Levels of Trees
def average_of_levels(root)
    queue1 = []
    queue2 = []
    queue1.push(root)
    res = 0
    averages = []
    divisor = 0
    
    until queue1.empty? && queue2.empty?
        if !(queue1.empty?)
            divisor = queue1.length.to_f
            until queue1.empty?
                pop = queue1.shift()
                res += pop.val
                if (pop.left != nil)
                    queue2.push(pop.left)
                end
                if (pop.right != nil)
                    queue2.push(pop.right)            
                end
            end
        end
        averages.push(res/divisor)
        res = 0
        queue1 = queue2;
        queue2 = []
    end
    averages
end

# Lowest Common Ancestor of Binary Tree

def lowest_common_ancestor(root, p, q)
    return nil if root.nil?
    return root if root == p || root == q
    
    left_child = lowest_common_ancestor(root.left, p, q)
    right_child = lowest_common_ancestor(root.right, p, q)
    
    return root if left_child && right_child
    return right_child if left_child.nil? && right_child
    return left_child if left_child && right_child.nil?
    return nil if right_child.nil? && left_child.nil?
end