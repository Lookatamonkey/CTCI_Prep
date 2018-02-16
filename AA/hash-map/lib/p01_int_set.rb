class MaxIntSet
  def initialize(max)
    @store = Array.new(max)
  end

  def insert(num)
    is_valid?(num)
    @store[num] = true
  end

  def remove(num)
    @store[num] = false
  end

  def include?(num)
    @store[num]
  end

  private

  def is_valid?(num)
    raise 'Out of bounds' if num > @store.length || num < 0
  end

  def validate!(num)
  end
end


class IntSet
  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
  end

  def insert(num)
    if !(include?(num))
      self[num] << num
    end
  end

  def remove(num)
    i = 0
    while (i < self[num].length)
      if self[num][i] == num
        self[num][i] = self[num][i+1]
      end
      i += 1
    end
  end

  def include?(num)
    i = 0
    while (i < self[num].length)
      return true if self[num][i] == num
      i += 1
    end

    false
  end

  private

  def [](num)
    @store[num % num_buckets]
  end

  def num_buckets
    @store.length
  end
end

class ResizingIntSet
  attr_reader :count

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(num)
    resize! if @count >= num_buckets
    if !(include?(num))
      self[num] << num 
      @count += 1
    end
  end

  def remove(num)
    flag = true if include?(num)
    if flag
      i = 0
      while (i < self[num].length)
        if self[num][i] == num
          self[num][i] = self[num][i+1]
        end
        i += 1
      end
      @count -= 1
    end
  end

  def include?(num)
    i = 0
    while (i < self[num].length)
      return true if self[num][i] == num
      i += 1
    end

    false
  end

  private
  attr_accessor :store

  def [](num)
    @store[num % num_buckets]
  end

  def num_buckets
    @store.length
  end

  def resize!
    temp_store = Array.new(num_buckets * 2) { [] }
    i = 0
    while i < num_buckets
      j = 0
      while j < @store[i].length
        num = @store[i][j]
        temp_store[num % temp_store.length] << num
        j += 1
      end
      i += 1
    end
    
    @store = temp_store
  end

  
end
