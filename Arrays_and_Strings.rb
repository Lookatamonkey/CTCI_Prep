def urlify(str, len)
  i = 0
  add_space = 0
  while i < len
    if str[i] == " "
      add_space += 2
      str[i] = "%20"
    end
    i += 1
  end
  str[0...len + add_space]
end

# urlify("Mr John Smith    ", 13)

def palindrome_permutation(str)
  char_hash = Hash.new(0)
  alphanum_counter = 0

  str.downcase.each_char do |char|
    if ( char.ord >= 97 && char.ord <= 122 )
      alphanum_counter += 1
      char_hash[char] += 1
    end
  end

  if alphanum_counter.even?
    return false if char_hash.values.any?{ |num| num.odd? }
  else
    p char_hash.values.select { |num| num.odd? }
    return false if char_hash.values.select { |num| num.odd? }.length.even?
  end
  true
end

# palindrome_permutation("Tact Coa")

