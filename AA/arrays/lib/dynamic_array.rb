require_relative "static_array"

class DynamicArray
  attr_reader :length

  def initialize()
    @length = 0
    @capacity = 8
    @store = Array.new(8)
  end

  # O(1)
  def [](index)
    if index + 1 > @length
      raise 'index out of bounds'
    else
      @store[index]
    end
  end

  # O(1)
  def []=(index, value)
    if index - 1 > @length
      raise 'index out of bounds'
    else
      @store[index] = value
    end
  end

  # O(1)
  def pop
    if @length == 0
      raise "index out of bounds"
    else
      popped = @store[@length - 1]
      @store[@length - 1] = nil
      @length -= 1
      popped
    end
  end

  # O(1) ammortized; O(n) worst case. Variable because of the possible
  # resize.
  def push(val)
    if @capacity == @length
      resize!
    else
      @store[@length] = val
      @length += 1
    end
  end

  # O(n): has to shift over all the elements.
  def shift
    if @length == 0
      raise 'index out of bounds'
    else
      shifted = store[0]
        i = 1
        while i < @length + 1
          @store[i-1] = @store[i]
          i += 1
        end
        @store[@length] = nil
        @length -= 1
        shifted
    end
  end

  # O(n): has to shift over all the elements.
  def unshift(val)
    if @capacity == @length
      resize!
    else
      i = @length + 1
      while i > 0
        @store[i] = @store[i-1]
        i -= 1
      end
      @store[0] = val
      @length += 1
    end
  end

  protected
  attr_accessor :capacity, :store
  attr_writer :length

  # O(n): has to copy over all the elements to the new store.
  def resize!
    copy_array
    @length = @length
    @capacity = @capacity * 2
  end

  def copy_array
    new_store = Array.new(@capacity * 2)
    i = 0
    while i < @length
      new_store[i] = @store[i]
      i += 1
    end
    @store = new_store
  end
end
