# use the indices to toggle numbers negative. if the number is negative that means you've seen it once before
def first_duplicate(a)
    a.each_index do |idx|  
        if a[(a[idx]).abs - 1] > 0
            a[(a[idx]).abs - 1] = -a[(a[idx]).abs - 1]
        else
            return (a[idx]).abs
        end
    end
    -1 
end

# because there are only a limited amount of characters, you're able to create an array of finite size as a store. This is similiar to an INT SET. Use this method when there's a finite number of characters as a store because it doesn't need to be dynamic.
def first_none_repeating_character(s)
    arr = Array.new(26) {0}
    
    s.each_char do |ltr|
        arr[ltr.downcase.ord - 97] += 1
    end
    
    s.each_char.with_index do |ltr, idx|
        return ltr if arr[ltr.downcase.ord - 97] == 1
    end
    
    "_"
end