# Island Perimeter
def island_perimeter(grid)
    len = grid[0].length
    perimeter = 0
    nxt = 0
    
    i = 0
    j = 0
    while j < len
        while i < len
            if i == 0 
                if grid[j][i] == 1
                    perimeter += 4
                end
            else
                if grid[j][i] == 1
                    perimeter += 4
                    if grid[j][i-1] == 1
                        nxt += 1
                    end
                end
            end
            i += 1
        end
        i = 0
        j += 1
    end
    
    i = 1
    j = 0
    while i < len
        while j < len
            if (grid[i][j] == 1) && (grid[i][j-1] == 1)    
                nxt += 1
            end
            j += 1
        end
        j = 1
        i += 1
    end
    perimeter -= (2 * nxt)
end

# Distribute candies
def distribute_candies(candies)
    sorted = candies.sort
    sister = {};
    counter = 0 
    sorted.each do |candy|
        if !(sister[candy])
            sister[candy] = true
            if counter + 1 > candies.length / 2 
            break
            end
            counter += 1
        end
    end
    counter
end

# Intersection of two arrays
def intersection(nums1, nums2)
    unique = {}
     res = []
     nums1.each do |num|
         if !(unique[num])
             unique[num] = true
         end
     end
     
     nums2.each do |num|
         if unique[num] && !(res.include?(num))
             res.push(num)
         end
     end
     
     res
 end

 # Intersection II
 def intersect(nums1, nums2)
    hashed = {}
    res = []
    
    nums1.each do |num|
        if !(hashed[num])
            hashed[num] = 1
        else
            hashed[num] += 1
        end
    end
    
    nums2.each do |num|
        if (hashed[num]) && (hashed[num] > 0)
            hashed[num] -= 1
            res.push(num)
        end
    end
    
    res
end

# Infamous FizzBuzz
def fizz_buzz(n)
    i= 1
    res = []
    until i > n
        if i % 15 == 0
            res << "FizzBuzz"
        elsif i % 5 == 0
            res << "Buzz"
        elsif i % 3 == 0
            res << "Fizz"
        else
            res << i.to_s
        end
        i += 1
    end
    
    res
end

#Can Win
def can_win_nim(n)
    return true if n <= 3
    return false if n % 4 == 0
    true
end

# Pivot Index
def pivot_index(nums)
    return -1 if nums.empty?
    
    left = 0
    right = nums[1..-1].reduce(:+)
    i = 0
    return i if left == right
    
    until i == (nums.length - 1)
        left += nums[i]
        i += 1
        right -= nums[i]
        return i if left == right
    end
    -1
end

# Better Pivot Index
def pivot_index(nums)
    return -1 if nums.empty?
    left = 0
    total = nums.reduce(:+)
    
    i = 0
    until i == ( nums.length )
        return i if total - left - nums[i] == left
        left += nums[i]
        i += 1
    end
    -1
end

# VERY VERY VERY BAD Find max length of repeated subarray
def find_length(a, b)
    longest = 0
    temp = 0
    return longest if (a.empty? || b.empty?)
    
    indexes = {}
    b.each_with_index do |num, idx|
        if !(indexes[num])
            indexes[num] = [idx]
        else
            indexes[num] << idx
        end
    end
    
    a.each_with_index do |num, idx|
        if !(indexes[num])
            next 
        else
            b_idxes = indexes[num]
            b_idxes.each do |b_idx|  
                temp = does_repeat?(a[idx..-1], b[b_idx..-1])
                
                temp > longest ? longest = temp : nil
            end
        end
    end
    
    longest
end

def does_repeat?(arr_a, arr_b)
    repeat = 0
    i = 0
    while (i < arr_a.length) && (i < arr_b.length)
        
        if arr_a[i] == arr_b[i]
            repeat += 1
            i += 1
        else
            return repeat
        end
    end
    repeat
end

# Binary Search
def b_search(arr, target)
    midpoint = arr.length / 2
    return midpoint if arr[midpoint] == target

    if arr.empty?
        return "empty"
    elsif arr[midpoint] > target
        b_search(arr[0...midpoint], target)
    elsif arr[midpoint] < target
        b_search(arr[(midpoint + 1)..-1], -1)
    end
end

# Self Dividing Numbers
def self_dividing_numbers(left, right)
    arr = (left..right).to_a
    res = []
    
    arr.each do |num|
        if is_self_dividing_numbers(num, num)
            res.push(num)
        end
    end
    res
end

def is_self_dividing_numbers(num, og_num)
    return true if num == 0
    dup = num
    divisor = dup % 10
    if divisor == 0 || og_num % divisor != 0
        return false
    else
        new_num = dup / 10
        is_self_dividing_numbers(new_num, og_num)
    end    
end

# Matrix Reshape
def matrix_reshape(nums, r, c)
    arr = nums.flatten
    return nums if arr.length / r != c 
    
    res = []
    temp = []
    arr.each do |num|
        temp.push(num) if temp.length != c
        if temp.length == c
            res.push(temp)
            temp = []
        end
    end
    
    res
end

# Find Max Consecutive
def find_max_consecutive_ones(nums)
    counter = 0
    longest = 0
    consecutive = false
    
    nums.each do |num|
        if num == 0
            if counter > longest
                longest = counter
            end
            counter = 0
            consecutive = false
        elsif num == 1 and consecutive == true
            counter += 1
        elsif num == 1 and consecutive == false
            counter = 1
            consecutive = true
        end
    end
    
    if counter > longest
        longest = counter
    end
    
    longest
end

# Find better max consecutive
def find_max_consecutive_ones(nums)
    counter = 0
    max = 0
    
    nums.each do |num|
        if num == 0
            counter = 0
        else
            counter += 1
            if counter > max
                max = counter
            end
        end  
    end
    max
end

# Find Longest Uncommon Subsequence
# If they're equal, return -1, else return the length of the longer string. 
# If they're the same length, but not equal, then the longest uncommon substring
# would be the length of either of the strings
def find_lu_slength(a, b)
    return -1 if a == b
    a.length > b.length ? a.length : b.length
end

# Find Single Number
def single_number(nums)
    hash = {}
    
    nums.each do |num|
        if hash[num]
            hash[num] = 0
        else
            hash[num] = 1
        end
    end
    
    nums.each do |num|
        return num if hash[num] == 1
    end
    
end

# Detect capital use
def detect_capital_use(word)
    return true if word.length < 2
    first_letter = word[0]
    second_letter = word[1]
    return false if (first_letter.capitalize != first_letter) && (second_letter.capitalize == second_letter)
    word[2..-1].each_char do |letter|
        if (first_letter.capitalize == first_letter) && (second_letter.capitalize == second_letter)
            return false if (letter.capitalize != letter)
        else
            return false if (letter.capitalize == letter)
        end
    end
    true
end

# Next Greatest Letter
def next_greatest_letter(letters, target)
    return letters.first if target.ord >= letters.last.ord
        
    letters.each do |letter|
        if letter.ord > target.ord
            return letter
        end
    end
end

# Arrange Coins
def arrange_coins(n)
    fs = 0
    i = 0
    counter = 0
    
    until i >= n
        fs += 1
        counter += 1
        i += counter
    end

    return i == n ? fs : fs - 1
end

# Construct Rectangle
def construct_rectangle(area)
    if perfect_sqrt(area)
        return [perfect_sqrt(area), perfect_sqrt(area)]
    else
        num = Math.sqrt(area).floor.round
        num.downto(1) do |i|
           if area % i == 0
               return [area/i, i]
           end
        end
        [area, 1]
    end
end

def perfect_sqrt(num)
    return Math.sqrt(num) == Math.sqrt(num).floor ? Math.sqrt(num).round : nil
end

# Better Construct Rectangle
def construct_rectangle(area)
    num = Math.sqrt(area).floor.round
    num.downto(1) do |i|
       if area % i == 0
           return [area/i, i]
       end
    end
    [area, 1]
end

# Minimum moves
def min_moves(nums)
    sum = 0
    min = nums.min

    nums.each do |num|
        sum += (num - min)
    end 
    sum
end

# Minimum moves II
def min_moves2(nums)
    nums.sort!
    
    if nums.length.odd? 
        median = nums[(nums.length - 1) / 2]
    else
        median = (nums[(nums.length / 2)] + nums[(nums.length / 2) - 1]) / 2
    end
    
    distance = 0
    nums.each do |num|
        distance += (num - median).abs
    end
    
    distance
end

# max profit
def max_profit(prices)
    total = 0
    max = 0
    
    return 0 if prices.empty?
    
    prices[1..-1].each_with_index do |price, idx|
        prev = prices[idx]
        diff = price - prev
        if diff >= 0
            total += diff
            total > max ? max = total : nil    
        else
            if total + diff < 0
                total = 0
            else
                total += diff
            end
        end
    end
    
    max
end

# First unique character
def first_uniq_char(s)
    uniques = {}
    
    s.each_char do |char|
        if uniques[char] 
            uniques[char] += 1
        else
            uniques[char] = 1 
        end
    end
    
    s.split('').each_with_index do |char, idx|
        return idx if uniques[char] == 1
    end
    
    -1
end

# Max consecutive nums
def find_max_consecutive_ones(nums)
    counter = 0
    max = 0
    
    nums.each do |num|
        if num == 0
            counter = 0
        else
            counter += 1
            if counter > max
                max = counter
            end
        end  
    end
    max
end

# Invert tree
def invert_tree(root)
    
    return nil if root.nil?
    queue1 = []
    queue2 = []
    
    queue1.push(root)
    until queue1.empty? && queue2.empty?
        until queue1.empty?
            parent = queue1.pop()
            parent.left, parent.right = parent.right, parent.left
            queue2.push(parent.left) if parent.left
            queue2.push(parent.right) if parent.right
        end
        queue1 = queue2
        queue2 = []
    end
    
    root
end


# sort roman numeral
def sort_romans(arr)
    return arr[0] if arr.length == 1 
    return nil if arr.empty? 

    res = []
    arr.each do |name|
       res.push( name.split(" ") )
    end

    res.sort do |x, y|
        if x.first > y.first
            1
        elsif x.first < y.first
            -1
        else
             if make_num(x.last) > make_num(y.last)
                1
             else
                -1
             end
        end
    end
end

def make_num(rn)

    store = {
       "I" => 1,
       "V" => 5,
       "X" => 10,
       "L" => 50,
       "C" => 100,
       "D" => 500,
       "M" => 1000
    }

    uniques = {"IV" => true, "IX" => true, "XL" => true, "XC" => true, "CD" => true, "CM" => true}

    num = store[rn[0]]
    prev = rn[0]
    return num if rn.length == 1

    rn[1..-1].each_char do |ltr|
        if uniques[prev + ltr]
            num += store[ltr] - (2 * store[prev])

        else
            num += store[ltr]
        end
        prev = ltr
    end

    return num
end
# sort_romans(["Elizbeth VI", "Henry VII", "John IV", "Elizbeth IX", "John VI", "Elizbeth XII"])

def two_nums(arr1, arr2)
    arr1.sort!
    hashed = {}
    counter = 1


    arr1.each_with_index do |num, idx|
        if hashed[num]
            counter += 1
            hashed[num][0] += 1
            
        else
            counter = 1
            hashed[num] = [counter, idx + 2]
        end
    end

    res = []
    arr2.each_with_index do |num, idx|
        if hashed[num]
            res.push(hashed[num][1])
        else
            if num > arr1[-1]
                res.push(arr1.length)
            else
                hashed.each do |key, value|
                    if key > num
                        
                        res.push(hashed[key][1] - hashed[key][0])
                        break
                    end
                end
            end
        end 
    end
    res
end

# two_nums([1, 1, 2, 3, 3, 7, 7], [3, 4, 8, 7, 7, 6]) # => [5, 5, 5, 7, 7, 7]

def steps(maze)
    width = maze[0].length
    height = maze.length

    dup = Array.new(height) { Array.new(width) {0} }

    i = 0
    # across the top
    while i < width
        if maze[0][i] == 1
            dup[0][i] = 1
        else
            break
        end
        i += 1
    end

    j = 0
    # across the left side
    while j < height
        if maze[j][0] == 1
            dup[j][0] = 1
        else
            break
        end
        j += 1
    end

    i = 1
    j = 1
    # center
    while j < height
        while i < width
            if maze[j][i] == 1
                counter = 0
                # above
                if maze[j - 1][i] == 1
                    counter += dup[j - 1][i]
                end
                # left
                if  maze[j][i - 1] == 1
                    counter += dup[j][i - 1]
                end
                dup[j][i] = counter
            end
            i += 1
        end
        i = 1
        j += 1
    end

    dup[height - 1][width - 1]
end

p steps([
    [1,0,1,1],
    [1,1,0,1],
    [1,1,1,1],
])


