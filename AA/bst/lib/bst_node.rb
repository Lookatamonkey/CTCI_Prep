class BSTNode
  attr_reader :value
  attr_accessor :left, :right

  def initialize(value)
    @value = value
  end

  def left=(left)
    @left = left
  end

  def right=(right)
    @right = right
  end
end
