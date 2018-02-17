require_relative 'p02_hashing'

class HashSet
  attr_reader :count

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { [] }
    @count = 0
  end

  def insert(key)
    resize! if @count == @store.length
    hashed = key.hash
    self[key] << hashed
    @count += 1
  end

  def include?(key)
    hashed = key.hash
    i = 0
    while i < self[key].length
      return true if self[key][i] == hashed
      i += 1
    end
    false
  end

  def remove(key)
    if include?(key)
      hashed = key.hash
      self[key].delete(hashed)
      @count -= 1
    end
  end

  private

  def [](num)
    @store[num.hash % num_buckets]
  end

  def num_buckets
    @store.length
  end

  def resize!
    temp_store = Array.new(num_buckets * 2) { [] }
    i = 0
    while i < @store.length
      j = 0
      while j < @store[i].length
        el = @store[i][j]
        temp_store[el % (num_buckets * 2)]
        j += 1
      end
      i += 1
    end
  end
end
