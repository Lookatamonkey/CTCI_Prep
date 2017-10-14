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

def one_away(str1, str2)
  return false if str1.length - str2.length > 1 || str2.length - str1.length > 1
  
  diff_counter = 0

  if str1.length == str2.length
    i = 0
    while i < str1.length
      if str1[i] != str2[i]
        diff_counter += 1
      end
      return false if diff_counter > 1
      i += 1
    end
  else
    longer_str  = str1.length > str2.length ? str1 : str2
    i = 0
    longer_str.each_char do |el|
      if el != str2[i]
        diff_counter += 1
        return false if diff_counter > 1
        next
      end
      i += 1
    end
  end

  true
end

p one_away("pale", "ple")
p one_away("pales", "pale")
p one_away("pale", "bale")
p one_away("pale", "bake")



