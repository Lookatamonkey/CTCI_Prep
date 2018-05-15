# Island Perimeter
def island_perimeter(grid)
    height = grid.length
    width = grid[0].length

    i = 0
    j = 0
    
    while i < height
        while j < width
            if perimeter[i][j] == 1
                check_boundaries(grid, i , j)
            end
            j += 1
        end
        j = 0
        i += 1
    end
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

    
end

i = 0
arr = [1, 2, 3, 4, 5, 6, 7]
while i < arr.length
    b_search(arr, i + 1)
    i += 1
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

    res.sort! do |x, y|
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

    res2 = []

    res.each do |name|
        res2.push(name.join(' '))
    end

    res2
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
# p sort_romans(["Elizbeth VI", "Henry VII", "John IV", "Elizbeth IX", "John VI", "Elizbeth XII"])

def two_nums(arr1, arr2)
    arr1.sort!
    hashed = {}
    counter = 1


    arr1.each_with_index do |num, idx|
        if hashed[num]
            counter += 1
            hashed[num][0] += 1
            hashed[num][1] += 1
        else
            counter = 1
            hashed[num] = [counter, idx + 1]
        end
    end

    res = []
    arr2.each_with_index do |num, idx|
        if hashed[num]
            res.push(hashed[num][1])
        else
            if num > arr1[-1]
                res.push(arr1.length)
            elsif num < arr1[0]
                res.push(0)
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

# p two_nums([1, 1, 2, 4], [0, 3, 5])

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

# p steps([
#     [1,1,1,1],
#     [1,1,1,1],
#     [1,1,1,1],
# ])

def missing_intervals(collected_intervals, desired_intervals)
    res = []

    collected_intervals.sort! do |x, y|
        if x.first > y.first
            1
        elsif x.first < y.first
            -1
        end
    end

    prev = 0
    temp_arr = []

    collected_intervals.each do |duple|      
        # p duple
        first = duple[0]
        last = duple[1]

        if temp_arr.empty?
            if first == desired_intervals[0]
                temp_arr = [last]
            elsif last > desired_intervals[0] && desired_intervals[0] > first
                temp_arr = [last]
            
            elsif last > desired_intervals[0] && first > desired_intervals[0]
                temp_arr = [desired_intervals[0], first]
                res.push(temp_arr)
                temp_arr = [last]
            end
            next
        end

        # between
        if desired_intervals[1] == last
            temp_arr.push(first)
            res.push(temp_arr)
            break
        elsif desired_intervals[1] < first && desired_intervals[1] < last
            temp_arr.push(desired_intervals[1])
            res.push(temp_arr)
            break
        else
            temp_arr.push(first)
            res.push(temp_arr)
            temp_arr = [last]
        end

    end

    res
end

# missing_intervals([[10,15], [3,4], [7,9]], [1,12]) == [[1, 3], [4, 7], [9, 10]]
# missing_intervals([[1,15]], [1,12]) == []
# missing_intervals([[1,12]], [1,12]) == []
# missing_intervals([[13,15], [3,4], [7,9]], [1,12]) == [[1, 3], [4, 7], [9, 12]]
# missing_intervals([[2, 4], [7, 12]], [1,12]) ==  [[1, 2], [4, 7]]
# missing_intervals([[1, 3], [4, 6],[7, 12]], [1,12]) == [[3, 4], [6, 7]]
# missing_intervals([[1, 2], [4, 6],[7, 16]], [1,12]) == [[2, 4], [6, 7]]
# missing_intervals([[1, 2], [4, 6],[7, 10]], [1,12]) == [[2, 4], [6, 7]]

# 763 - Partition Label
def partition_labels(s)
    store = Hash.new(0)
    res = []
    arr = s.split("")

    arr.each_with_index do |ltr, idx|
        store[ltr] = idx
    end
    
    last_index = 0
    partition = 0
    arr.each_with_index do |ltr, idx|
        last_index = store[ltr] if store[ltr] > last_index
        if idx == last_index
            res << idx - partition + 1
            partition = idx + 1
        end
    end

    res
end

# p partition_labels("ababcbacadefegdehijhklij")

# 531 Lonely Pixel
def find_lonely_pixel(picture)
    height = picture.length
    width = picture[0].length
    lonely_counter = 0
    row = {}
    column = {}
    i = 0
    j = 0
    
    while i < height
        while j < width
            if picture[i][j] == "B"
                column[i] ? column[i] += 1 : column[i] = 1
                row[j] ? row[j] += 1 : row[j] = 1
            end
            j += 1
        end
        j = 0
        i += 1
    end
    
    i = 0
    j = 0

    while i < height
        while j < width
            lonely_counter += 1 if picture[i][j] == "B" && row[j] == 1 && column[i] == 1
            j += 1
        end
        j = 0
        i += 1
    end
    
    lonely_counter
end

# 418 Sentence screen fitting
def words_typing(sentence, rows, cols)
    rows_remaining = rows
    cols_remaining = cols
    full_rotations = 0
    i = 0
    
    until rows_remaining == 0
        if cols_remaining == cols
            cols_remaining -= sentence[i % sentence.length].length
            i += 1
            full_rotations += 1 if (i % sentence.length) == 0
        elsif cols_remaining < cols && cols_remaining >= sentence[i % sentence.length].length + 1
            cols_remaining -= sentence[i % sentence.length].length + 1
            i += 1
            full_rotations += 1 if (i % sentence.length) == 0
        else
            cols_remaining = 0
        end
        
        if cols_remaining == 0
            rows_remaining -= 1
            cols_remaining = cols
        end
    end
    
    full_rotations
end

# 121 Best time to buy and sell stock
def max_profit(prices)
    max_profit = 0
    min_price = prices[0]
    
    prices.each do |price|
        min_price = [min_price, price].min
        max_profit = [max_profit, price - min_price].max
    end
    
    max_profit
end

# 122 Best time to buy and sell stock
def max_profit(prices)
    return 0 if prices.empty?
    total_profit = 0
    idx = 1
    while idx < prices.length
        total_profit += (prices[idx] - prices[idx - 1]) if prices[idx] > prices[idx - 1]
        idx += 1
    end
    
    total_profit
end

#3. Longest Substring Without Repeating Characters
def length_of_longest_substring(s)
    return 1 if s.length == 1
    
    hash = {}
    str = ""
    head = 0
    
    s.split("").each_with_index do |ch, idx|
        if hash[ch]
            head = hash[ch] + 1 if hash[ch] + 1 > head
            hash[ch] = idx    
        else
            hash[ch] = idx
        end
        str = s[head..idx] if s[head..idx].length > str.length
    end
    str.length
end

#807. Max Increase to Keep Skyline

def max_increase_keeping_skyline(grid)
    width_store, height_store = create_stores(grid)
    find_max_diff(grid, width_store, height_store)
end

def create_stores(grid)
    width_store = {}
    height_store = {}
    
    width = 0
    height = 0
    
    while height < grid.length
        while width < grid[0].length
            if width_store[width]
                width_store[width] = grid[height][width] if grid[height][width] > width_store[width]
            else
                width_store[width] = grid[height][width]
            end

            if height_store[height]
                height_store[height] = grid[height][width] if grid[height][width] >  height_store[height]
            else
                height_store[height] = grid[height][width]
            end
            width += 1
        end

        width = 0
        height += 1
    end

    return width_store, height_store
end

def find_max_diff(grid, width_store, height_store)
    total = 0
    height = 0
    width = 0

    while height < grid.length
        while width < grid[0].length
            max_of_min_towers = [width_store[width], height_store[height]].min
            total += max_of_min_towers - grid[height][width]
            width += 1
        end

        width = 0
        height += 1
    end

    total
end

# max_increase_keeping_skyline([[3,0,8,4], [2,4,5,7], [9,2,6,3], [0,3,1,0]])

# 6. ZigZag Conversion

def convert(s, num_rows)
    res = Array.new(num_rows) { "" }
    direction = 1
    slot = 0

    s.each_char do |ch|
        res[slot] += ch
        if slot == 0
            direction = 1
        elsif slot == num_rows - 1
            direction = -1
        end
        slot += direction
    end

    res.join("")
end

# p convert("PAYPALISHIRING", 3)

# 746 Min Cost Climbing Stairs
def min_cost_climbing_stairs(cost)
    i = cost.length - 3
    while i >= 0
        cost[i] += [cost[i+1], cost[i+2]].min
        i -= 1
    end

    [cost[0], cost[1]]
end

cost1 = [10, 15, 20]
cost2 = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
# p min_cost_climbing_stairs(cost1) # == 15
min_cost_climbing_stairs(cost2) # == 6

#276 Paint Fence
def paint_fence(n, k)
    total = k;
 
    #There are 0 ways for single post to
    #violate (same color_ and k ways to
    #not violate (different color)
    same = 0, diff = k;
 
    #Fill for 2 posts onwards
    i = 2
    while i <= n
        #Current same is same as previous diff
        same = diff;

        #We always have k-1 choices for next post
        diff = total * (k-1);

        #Total choices till i.
        total = (same + diff);
        i += 1
    end

    total
end

# paint_fence(4, 3)

# 62. Unique Paths
def unique_paths_iterative(m, n)
    return 0 if m == 0 || n == 0

    grid = Array.new(m) { Array.new(n) {0} }
    grid[0][0] = 1

    row = 0
    column = 0

    while row < m
        while column < n
            # check top
            if row > 0
                grid[row][column] += grid[row - 1][column]
            end
            # check left
            if column > 0
                grid[row][column] += grid[row][column - 1]
            end

            column += 1
        end
        column = 0
        row += 1
    end

    grid[row - 1][column - 1]
end

# p unique_paths_iterative(7, 3)
# p unique_paths_iterative(3, 3)

def unique_paths_recursive(m, n, store = {})
    return store[[m, n]] if store[[m, n]]

    if m == 1 && n == 1
        store[[m, n]] = 1
        return 1
    end

    above = m > 1 ? unique_paths_recursive(m - 1, n, store) : 0
    left = n > 1 ? unique_paths_recursive(m, n - 1, store) : 0

    store[[m - 1, n]] = above
    store[[m, n - 1]] = left
    total = above + left
end

# p unique_paths_recursive(23, 12)
# p unique_paths_recursive(3, 3)
