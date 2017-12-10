# Write a method that takes in a number and returns a string, placing
# a single dash before and after each odd digit. There is one
# exception: don't start or end the string with a dash.
#
# You may wish to use the `%` modulo operation; you can see if a number
# is even if it has zero remainder when divided by two.
#
# Difficulty: medium.

def dasherize_number(num)

  arr1 = num.to_s.split("")
  arr2 = []

  if arr1[0] % 2 === 0
    arr2.push(num)
  else
    arr2.push(num)
    arr2.push("-")
  end

  arr1[1..-2].each do |num|
    if num % 2 === 0
      arr2.push(num)
    else
      arr2.push("-")
      arr2.push(num)
      arr2.push("-")
    end
  end

  if arr1[-1] % 2 === 0
    arr2.push(num)
  else
    arr2.push("-")
    arr2.push(num)
  end

  p arr2.join("")
end

# These are tests to check that your code is working. After writing
# your solution, they should all print true.

puts(
  'dasherize_number(203) == "20-3": ' +
  (dasherize_number(203) == '20-3').to_s
)
puts(
  'dasherize_number(303) == "3-0-3": ' +
  (dasherize_number(303) == '3-0-3').to_s
)
puts(
  'dasherize_number(333) == "3-3-3": ' +
  (dasherize_number(333) == '3-3-3').to_s
)
puts(
  'dasherize_number(3223) == "3-22-3": ' +
  (dasherize_number(3223) == '3-22-3').to_s
)
