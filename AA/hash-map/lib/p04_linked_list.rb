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
    prev = @prev
    nxt = @next
    prev.next = nxt
    nxt.prev = prev

    prev
  end
end

class LinkedList
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
    @head
  end

  def last
    @tail
  end

  def empty?
    first.val.nil?
  end

  def get(key); end

  def include?(key); end

  def append(key, val)
    node = Node.new(key, val)
    set_tail(node)
  end

  def update(key, val); end

  def remove(key); end

  def each; end

  # uncomment when you have `each` working and `Enumerable` included
  # def to_s
  #   inject([]) { |acc, link| acc << "[#{link.key}, #{link.val}]" }.join(", ")
  # end

  private

  attr_accessor :tail

  def set_tail(node)
    @tail.next = node
    node.prev = @tail
    node.next = nil
  end
end
