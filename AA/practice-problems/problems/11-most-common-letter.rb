# Write a method that takes in a string. Your method should return the
# most common letter in the array, and a count of how many times it
# appears.
#
# Difficulty: medium.

def most_common_letter(string)
  hash = {}
  
  string.split("").each do |letter|
    if hash[letter]
      hash[letter] += 1
    else
      hash[letter] = 1
    end
  end

  count = hash.values
  letters = hash.keys

  i = 0
  counter = 0
  while i < count.length
    if count[i] > counter
      counter = count[i]
      mcl = letters[i]
    end
    i += 1
  end
  [mcl, counter]
end

# These are tests to check that your code is working. After writing
# your solution, they should all print true.

puts(
  'most_common_letter("abca") == ["a", 2]: ' +
  (most_common_letter('abca') == ['a', 2]).to_s
)
puts(
  'most_common_letter("abbab") == ["b", 3]: ' +
  (most_common_letter('abbab') == ['b', 3]).to_s
)
