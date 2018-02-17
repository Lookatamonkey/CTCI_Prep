class BSTNode
  attr_reader :value
  attr_accessor :left, :right

  def initialize(value)
    @value = value
  end

  attr_writer :left

  attr_writer :right
end
