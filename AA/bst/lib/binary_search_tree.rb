# There are many ways to implement these methods, feel free to add arguments 
# to methods as you see fit, or to create helper methods.
require_relative "bst_node"

class BinarySearchTree
  attr_accessor :root

  def initialize
    @root = nil
  end

  def insert(value)
    return @root = create_node(value) if !(root_exists?)
    parent_node = traverse_to_parent(value)
    
    return nil if parent_node.nil?
    if parent_node.value > value
      parent_node.left = create_node(value)
    else
      parent_node.right = create_node(value)
    end
  end

  def find(value, tree_node = @root)
    until tree_node.nil?
      if value > tree_node.value
        tree_node = tree_node.right
      elsif value < tree_node.value
        tree_node = tree_node.left
      elsif value == tree_node.value
        return tree_node
      end
    end

    nil
  end

  def delete(value)
    return nil if !(root_exists?)
    
    return nil if node.nil?

    if node.left.nil? && node.right.nil?
      parent = traverse_to_parent(node.value)
      parent.value > node.value ? parent.left = nil : parent.right = nil
    elsif node.left && node.right.nil?
      node = node.left
      parent = traverse_to_parent(node.value)
      parent.left = node
    elsif node.right && node.left.nil?
      node = node.right
      parent = traverse_to_parent(node.value)
      parent.right = node
    else
      min = find_min(node.right.value)
      parent = traverse_to_parent(min.value)

      node.value = min.value
      parent.right = nil
    end

    nil
  end

  # helper method for #delete:
  def maximum(tree_node = @root)
    return nil if !(root_exists?)

    find_max(tree_node)
  end

  def depth(tree_node = @root)
    return -1 if tree_node.nil?
    
    1 + [depth(tree_node.left), depth(tree_node.right)].max
  end 

  def is_balanced?(tree_node = @root)
    return true if tree_node.nil?

    left = depth(tree_node.left)
    right = depth(tree_node.right)

    if (left - right).abs > 1
      return false
    else
      is_balanced?(tree_node.left) && is_balanced?(tree_node.right)
    end
  end

  def in_order_traversal(tree_node = @root, arr = [])
    return nil if tree_node.nil?

    in_order_traversal(tree_node.left, arr)
    arr.push(tree_node.value)
    in_order_traversal(tree_node.right, arr)

    return arr
  end


  private
  # optional helper methods go here:
  def root_exists?
    !(@root.nil?)
  end

  def create_node(value, left = nil, right = nil)
    node = BSTNode.new(value)
    node.left = left
    node.right = right
    return node
  end

  def traverse_to_parent(value)
    node = @root
    parent_node = nil

    until node.nil?
      if value > node.value
        parent_node = node
        node = node.right
      elsif value < node.value
        parent_node = node
        node = node.left
      else
        return parent_node
      end
    end

    parent_node
  end

  def find_max(node)
    return node if node.left.nil? && node.right.nil?

    return find_max(node.right) if node.right
    return find_max(node.left) if node.left
  end

  def find_min(node)
    return node if node.left.nil? && node.right.nil?

    return find_min(node.left) if node.left
    return find_min(node.right) if node.right
  end

end
