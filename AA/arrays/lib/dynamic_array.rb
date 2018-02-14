require_relative "static_array"

class DynamicArray
  attr_reader :length

  def initialize
    @length = 0
    @dynamic_array = []
  end

  # O(1)
  def [](index)

  end

  # O(1)
  def []=(index, value)
    if index + 1 > @length
      raise "index out of bounds"
    else 
      @dynamic_array[index] = value
    end
  end

  # O(1)
  def pop
  end

  # O(1) ammortized; O(n) worst case. Variable because of the possible
  # resize.
  def push(val)
  end

  # O(n): has to shift over all the elements.
  def shift
  end

  # O(n): has to shift over all the elements.
  def unshift(val)
  end

  protected
  attr_accessor :capacity, :store
  attr_writer :length

  def check_index(index)
    if index + 1 > @length
      raise "index out of bounds"
    else 
      @dynamic_array[index]
    end
  end

  # O(n): has to copy over all the elements to the new store.
  def resize!
  end
end
