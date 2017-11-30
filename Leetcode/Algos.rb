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