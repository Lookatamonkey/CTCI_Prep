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
    p root
    root
end