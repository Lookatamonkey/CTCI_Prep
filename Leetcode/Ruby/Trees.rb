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

def lowest_common_ancestor(root, p, q)
    return nil if root.nil?
    
    left = lowest_common_ancestor(root.left, p, q)
    right = lowest_common_ancestor(root.right, p, q)
    
    return root if root == p || root == q
    return root if left && right
    return left if left
    return right if right
    return nil
end

# Is Balanced Tree
def is_balanced(root)
    return true if root.nil?
    
    max_left_height = find_max_height(root.left)
    max_right_height = find_max_height(root.right)
    
    if (max_left_height - max_right_height).abs > 1
        false
    else
        is_balanced(root.left) && is_balanced(root.right)
    end
end

def find_max_height(node)
    return 0 if node.nil? 
    1 + [find_max_height(node.left), find_max_height(node.right)].max
end

# 572 - Subtree of Another Subtree
def is_subtree(s, t)
    return false if s.nil? || t.nil?
    is_subtree_helper(s, t) || is_subtree(s.left, t) || is_subtree(s.right, t)
end

def is_subtree_helper(s, t)
    return true if s.nil? && t.nil?
    return false if s.nil? && !(t.nil?) || !(s.nil?) && t.nil?
    return false if s.val != t.val
    is_subtree_helper(s.left, t.left) && is_subtree_helper(s.right, t.right)

# 563 - Binary Tree Tilt
def find_tilt(root)
    running_tilt = 0
    find_tilt_helper(root, running_tilt = [running_tilt])

    return running_tilt[0]
end

def find_tilt_helper(root, running_tilt)
    if root.nil?
       return 0
    end
    
    left_sum = find_tilt_helper(root.left, running_tilt)
    right_sum = find_tilt_helper(root.right, running_tilt)
    
    num = running_tilt[0] + (left_sum - right_sum).abs
    running_tilt[0] = num
        
    return root.val + left_sum + right_sum

end

# 112 - Path Sum
def has_path_sum(root, sum)
    return false if root.nil?
    return true if root.left.nil? && root.right.nil? && sum - root.val == 0
    
    return has_path_sum(root.left, sum - root.val) || has_path_sum(root.right, sum - root.val)
end

# 230 - Kth Smallest
def kth_smallest(root, k)
    helper(counter = [0], root, k)
end

def helper(counter, root, k)
    return nil if root.nil?
    
    left = helper(counter, root.left, k) 
    return left if left
    
    counter[0] += 1
    return root.val if counter[0] == k
    
    right = helper(counter, root.right, k)    
    return right if right
    
    return nil
end