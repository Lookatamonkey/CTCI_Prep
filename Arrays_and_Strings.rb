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


