require_relative "static_array"

class RingBuffer
  attr_reader :length

  def initialize(length = 0)
    @length = 0
    @capacity = 8
    @store = Array.new(8)
    @start_idx = 0
  end

  # O(1)
  def [](index)
    if index + 1 > @length
      raise 'index out of bounds'
    else
      @store[(@start_idx + index) % @capacity]
    end
  end

  # O(1)
  def []=(index, val)
    if index - 1 > @length
      raise 'index out of bounds'
    else
      store[(@start_idx + index) % @capacity] = val
    end
  end

  # O(1)
  def pop
    if @length == 0
      raise "index out of bounds"
    else
      popped = @store[((@start_idx + @length) % @capacity) - 1]
      @store[(@start_idx + @length) % @capacity - 1] = nil
    end
    @length -= 1
    popped
  end

  # O(1) ammortized
  def push(val)
    if @capacity == @length
      resize!
    end
    if (@start_idx + @length) > @length
      @store[(@start_idx + @length) % @capacity] = val
    else
      @store[@start_idx + @length] = val
    end
    @length += 1
    nil
  end

  # O(1)
  def shift
    if @length == 0
      raise 'index out of bounds'
    end
    shifted = @store[@start_idx]
    @store[@start_idx] = nil
    if @start_idx == @capacity - 1
      @start_idx = 0
    else  
      @start_idx += 1
    end
    @length -= 1
    shifted
  end

  # O(1) ammortized
  def unshift(val)
    if @capacity == @length
      resize!
    end
    if @start_idx == 0
      @store[@capacity - 1] = val
      @start_idx = @capacity - 1
    else
      @store[@start_idx - 1] = val
      @start_idx -= 1
    end
    @length += 1
  end

  protected
  attr_accessor :capacity, :start_idx, :store
  attr_writer :length

  def check_index(index)
    
  end

  def resize!
    copy_array
    @start_idx = 0
    @capacity = @capacity * 2
  end

  def copy_array
    new_store = Array.new(@capacity * 2)
    i = 0
    while i < @capacity
      new_store[i] = @store[(i + @start_idx) % @capacity]
      i += 1
    end
    @store = new_store
  end

  def last_idx
    if @length == 0
      @start_idx + @length
    else
      (@start_idx + @length) % @length
    end
  end

end