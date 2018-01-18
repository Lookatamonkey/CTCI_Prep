#  Minimal Tree
# given a sorted array, return a binary search tree with minimal height

# 1) recursively split the array in half by a middle element
# 2) the middle element will be the root of the tree (or subtree)

def sorted_array_to_bst(nums)
    
    return nil if nums.empty?
    midpt = nums.length / 2
    
    root = TreeNode.new(nums[midpt])
    root.left = sorted_array_to_bst(nums[0...midpt])
    root.right = sorted_array_to_bst(nums[midpt + 1..-1])

    return root
end

# Is Same Tree
def is_same_tree(p, q)
    return true if p.nil? && q.nil?

    return false if p.nil? || q.nil?
    if p.val == q.val
        return is_same_tree(p.left, q.left) && is_same_tree(p.right, q.right)
    end
    false
end
