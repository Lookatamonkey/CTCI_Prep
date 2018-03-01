class Node
  attr_accessor :key, :val, :next, :prev

  def initialize(key = nil, val = nil)
    @key = key
    @val = val
    @next = nil
    @prev = nil
  end

  def to_s
    "#{@key}: #{@val}"
  end

  def remove
    prev = self.prev
    nxt = self.next
    prev.next = nxt
    nxt.prev = prev

    self.next = nil
    self.prev = nil

    self
  end
end

class LinkedList
  attr_reader :head

  def initialize
    @head = Node.new
    @tail = Node.new
    @head.next = @tail
    @tail.prev = @head
  end

  def [](i)
    each_with_index { |link, j| return link if i == j }
    nil
  end

  def first
    empty? ? nil : @head.next
  end

  def last
    empty? ? nil : @tail.prev
  end

  def empty?
    @head.next == @tail
  end

  def get(key)
    if !(empty?)
      node = first
      until node.key == key || node == @tail
        break if node.key == key
        node = node.next
      end

      node == @tail ? nil : node.val
    end
  end

  def include?(key)
    if !(empty?)
      node = first
      until node.key == key || node == @tail
        node = node.next
      end
    end
      node.key == key ? true : false
  end

  def append(key, val)
    node = Node.new(key, val)
    if empty?
      @head.next = node
      @tail.prev = node
      node.prev = @head
      node.next = @tail
    else
      node.prev = last
      last.next = node
      node.next = @tail
      @tail.prev = node
    end
  end

  def update(key, val)
    if !(empty?)
      node = first
      until node.key == key
        node = node.next
      end
      node.val = val
    end
  end

  def remove(key)
    if !(empty?)
      node = first
      until node.key == key || node == @tail
        node = node.next
      end

      if node.key == key
        before = node.prev
        after = node.next

        before.next = after
        after.prev = before

        node.next = nil
        node.prev = nil
      end

      node == @tail ? nil : node
    end
  end

  def each
    if !(empty?)
      node = first
      until node == @tail
        yield node
        node = node.next
      end
    end
  end

  # uncomment when you have `each` working and `Enumerable` included
  def to_s
    inject([]) { |acc, link| acc << "[#{link.key}, #{link.val}]" }.join(", ")
  end

end
