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

p b_search([1, 2, 3, 4, 5], 4)
