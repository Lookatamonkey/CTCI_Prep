require_relative 'p02_hashing'
require_relative 'p04_linked_list'

class HashMap
  include Enumerable
  attr_reader :count

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { LinkedList.new }
    @count = 0
  end

  def include?(key)
    linked_list = bucket(key)
    linked_list.include?(key)
  end

  def set(key, val)
    resize! if @count == num_buckets
    linked_list = bucket(key)
    if linked_list.include?(key)
      linked_list.update(key, val)
    else
      linked_list.append(key, val)
      @count += 1
    end
  end

  def get(key)
    linked_list = bucket(key)
    linked_list.get(key)
  end

  def delete(key)
    linked_list = bucket(key)
    if linked_list.remove(key)
      @count -= 1
    end
  end

  def each
    @store.each do |bucket|
      bucket.each do |node|
        yield [node.key, node.val]
      end
    end
  end

  # uncomment when you have Enumerable included
  def to_s
    pairs = inject([]) do |strs, (k, v)|
      strs << "#{k.to_s} => #{v.to_s}"
    end
    "{\n" + pairs.join(",\n") + "\n}"
  end

  alias_method :[], :get
  alias_method :[]=, :set

  private

  def num_buckets
    @store.length
  end

  def resize!
    new_num_buckets = num_buckets * 2
    new_store = Array.new(new_num_buckets) { LinkedList.new }
    @store.each do |linked_list|
      linked_list.each do |node|
        hashed = node.key.hash
        head_node = new_store[hashed % new_num_buckets]
        head_node.append(node.key, node.val)
      end
    end    

    @store = new_store
  end

  def bucket(key)
    # optional but useful; return the bucket corresponding to `key`
    hashed = key.hash
    @store[hashed % num_buckets]
  end
end
