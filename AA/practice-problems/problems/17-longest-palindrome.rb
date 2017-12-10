# Write a method that takes in a string of lowercase letters (no
# uppercase letters, no repeats). Consider the *substrings* of the
# string: consecutive sequences of letters contained inside the string.
# Find the longest such string of letters that is a palindrome.
#
# Note that the entire string may itself be a palindrome.
#
# You may want to use Array's `slice(start_index, length)` method,
# which returns a substring of length `length` starting at index
# `start_index`:
#
#     "abcd".slice(1, 2) == "bc"
#     "abcd".slice(1, 3) == "bcd"
#     "abcd".slice(2, 1) == "c"
#     "abcd".slice(2, 2) == "cd"
#
# Difficulty: hard.

def longest_palindrome(string)
  longest = ""
  i = 0
  j = 0

  while i < string.length
    while j < string.length
      if is_palindrome?(string[i..j]) && string[i..j].length > longest.length
        longest = string[i..j]
      end
      j += 1
    end
    i += 1
    j = i + 1
  end

  longest
end

def is_palindrome?(string)
  first_idx = 0
  second_idx = string.length - 1

  until first_idx >= second_idx
    return false if string[first_idx] != string[second_idx]
    first_idx += 1
    second_idx -= 1
  end

  true
end

# These are tests to check that your code is working. After writing
# your solution, they should all print true.

puts(
  'longest_palindrome("abcbd") == "bcb": ' +
  (longest_palindrome('abcbd') == 'bcb').to_s
)
puts(
  'longest_palindrome("abba") == "abba": ' +
  (longest_palindrome('abba') == 'abba').to_s
)
puts(
  'longest_palindrome("abcbdeffe") == "effe": ' +
  (longest_palindrome('abcbdeffe') == 'effe').to_s
)
