# Write a method that takes an array of numbers. If a pair of numbers
# in the array sums to zero, return the positions of those two numbers.
# If no pair of numbers sums to zero, return `nil`.
#
# Difficulty: medium.

def two_sum(nums)
  sorted = nums.sort

  idx1 = 0
  idx2 = nums.length - 1

  while idx2 > idx1
    if (nums[idx1] + nums[idx2] == 0)
      return [idx1, idx2]
    end
    if nums[idx1] + nums[idx2] > 0
      idx2 -= 1
    elsif nums[idx1] + nums[idx2] < 0
      idx1 += 1
    end
  end
    nil
end

# These are tests to check that your code is working. After writing
# your solution, they should all print true.

puts(
  'two_sum([1, 3, 5, -3]) == [1, 3]: ' + (two_sum([1, 3, 5, -3]) == [1, 3]).to_s
)
puts(
  'two_sum([1, 3, 5]) == nil: ' + (two_sum([1, 3, 5]) == nil).to_s
)
