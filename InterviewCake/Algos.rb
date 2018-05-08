def get_products_of_all_ints_except_at_index(arr)
    res = Array.new(arr.length) {1}

    i = 0
    j = 1
    while i < arr.length
        (arr.length - 1).times do |num|
            res[j % arr.length] *= arr[i]
            j += 1
        end
        i += 1
        j = i + 1
    end
    res
end

# get_products_of_all_ints_except_at_index([1, 7, 3, 4]) == [84, 12, 28, 21]

def highest_product_of_three(arr)
    return arr.reduce(:*) if arr.length === 3

    smallest_negative = nil
    second_smallest_negative = nil

    largest_num = 0
    second_largest_num = 0
    third_largest_num = 0

    arr.each do |num|
        if num >= 0
            if num > largest_num
                third_largest_num = second_largest_num
                second_largest_num = largest_num
                largest_num = num
            elsif num > second_largest_num
                third_largest_num = second_largest_num
                second_largest_num = num
            elsif num > third_largest_num
                third_largest_num = num
            end
        else
            
            if smallest_negative.nil? || num < smallest_negative
                smallest_negative = num
            elsif second_smallest_negative.nil? || num < second_smallest_negative
                second_smallest_negative = num
            end
        end
    end

    option_1 = nil #two negatives, one positive
    option_2 = nil
    if smallest_negative && second_largest_num
        option_1 = smallest_negative * second_smallest_negative * largest_num
        option_2 = largest_num * second_largest_num * third_largest_num
    else
        return largest_num * second_largest_num * third_largest_num
    end
    option_1 > option_2 ? option_1 : option_2
end

# highest_product_of_three([-10, -10, 1, 3, 2])

def in_house_calendar(times)
    sorted = times.sort { |x, y| x[0] <=> y[0] }
    res = [sorted[0]]

    temp = nil
    sorted[1..-1].each do |time|
        if time[0] < res[-1][1] && time[0] > res[-1][0]
            last = time[1] > res[-1][1] ? time[1] : res[-1][1]
            temp = ([res[-1][0], last])
            res.pop
            res.push(temp)
        elsif res[-1][1] == time[0]
            res[-1][1] = time[1]
        else
            res.push(time)
        end
    end
    res
end

# in_house_calendar([[1, 10], [2, 6], [3, 5], [7, 9]])

def rare_coins(coins, amt, idx)

end

# rare_coins([1, 2, 3], 4, 0)

def intersecting_rectanges(rect1, rect2)

    intersecting_rect_width = 0
    intersecting_rect_height = 0
    intersecting_rect_left_x = 0
    intersecting_rect_bottom_y = 0

    if rect1[:left_x] + rect1[:width] > rect2[:left_x] && rect2[:left_x] > rect1[:left_x]
        intersecting_rect_width = rect1[:left_x] + rect1[:width] - rect2[:left_x]
        intersecting_rect_left_x = rect2[:left_x]
    elsif rect2[:left_x] + rect2[:width] > rect1[:left_x] && rect1[:left_x] > rect2[:left_x]
        intersecting_rect_width = rect2[:left_x] + rect2[:width] - rect1[:left_x]
        intersecting_rect_left_x = rect1[:left_x]
    end

    if rect1[:bottom_y] + rect1[:height] > rect2[:bottom_y] && rect2[:bottom_y] > rect1[:bottom_y]
        intersecting_rect_height = rect1[:bottom_y] + rect1[:height] - rect2[:bottom_y]
        intersecting_rect_bottom_y = rect1[:bottom_y]
    elsif rect2[:bottom_y] + rect2[:height] > rect1[:bottom_y] && rect1[:bottom_y] > rect2[:height]
        intersecting_rect_height = rect2[:bottom_y] + rect2[:height] - rect1[:bottom_y]
        intersecting_rect_bottom_y = rect2[:bottom_y]
    end
    
    {
        :left_x => intersecting_rect_left_x,
        :bottom_y => intersecting_rect_bottom_y,

        :width => intersecting_rect_width,
        :height => intersecting_rect_height
    }
end

class TempTracker
    def initialize
        @store = {}
        @total = 0
        @count = 0
        @max = nil
        @min = nil
    end

    def insert(temp)
        if @store[temp]
            @store[temp] += 1
        else
            @store[temp] = 1
        end
        @count += 1
        @total += temp
        set_max(temp)
        set_min(temp)
        sort_temps
        temp
        
    end

    # O(1)
    def get_max()
        @max
    end

    # O(1)
    def get_min()
    end

    # O(1)
    def get_mean()
        raise error if @total == 0 && count == 0
        @total / @count.float
    end

    # O(1)
    def get_mode()
    end

    private

    def set_max(temp)
        if @max.nil?
            @max = temp
        else
            @max = temp if temp > @max
        end
    end

    def set_min(temp)
        if @min.nil?
            @min = temp
        else
            @min =temp if temp < @min
        end
    end

    def sort_temps
        @store.sort_by { |k, v| v }
    end
end

def super_balanced(node)
    return true if node.nil?
    less_than_expected = false

    q1 = [node]
    q2 = []

    until q1.empty? && q2.empty?
        q1.each do |node|
            return false if less_than_expected == true && (node.right || node.left)

            if node.left
                q2 << node.left
            else
                less_than_expected = true 
            end
            if node.right
                q2 << node.right
            else
                less_than_expected = true
            end
        end

        q1 = q2
        q2 = []
    end

    true
end

def is_valid_bst(root, max = nil, min = nil)
    return true if root.nil?
    
    return false if max && root.val >= max
    return false if min && root.val <= min

    is_valid_bst(root.left, root.val, min) && is_valid_bst(root.right, max, root.val)
end

def kth_smallest(root, k)
    kth_helper(root, k, counter = [0])
end

def kth_helper(root, k, counter)
    return nil if root.nil?

    left = kth_helper(root.left, k, counter)
    return left if left
    counter[0] += 1
    return root.val if k == counter 
    right = kth_helper(root.right, k, counter)
    return right if right
end

def binary_search(arr, target)
    return -1 if arr.length < 1

    mid = arr.length / 2
    return mid if arr[mid] == target

    left = binary_search(arr[0...mid], target)
    right = binary_search(arr[mid+1..-1], target)

    return right > -1 ? 1 + mid + right : left
end

# p binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9], 9)

def find_rotation_pt(arr)
    return 0 if arr.length == 1 || arr.empty?

    mid = arr.length / 2
    return mid if out_of_order?(arr[mid - 1], arr[mid]) == -1

    left = find_rotation_pt(arr[0...mid])
    right = find_rotation_pt(arr[mid..-1])

    return right > 0 ? mid + right : left
end

def out_of_order?(word1, word2)
    i = 0
    while i < [word1.length, word2.length].min
        return -1 if word1[i].ord > word2[i].ord
        return 1 if word2[i].ord > word1[i].ord
        i += 1
    end
    
    return -1 if word1.length > word2.length
    1
end

words = [
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
    'asymptote',  # <-- rotates here!
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
]

def better_find_rotation_pt(arr)
    return arr[0] if arr.length == 1

    floor_idx = 0
    ceiling_idx = arr.length - 1
    total = 0

    while ceiling_idx > floor_idx
        mid = (floor_idx + ceiling_idx) / 2
        if arr[mid] >= arr[0]
            floor_idx = mid
        else
            ceiling_idx = mid
        end
        return ceiling_idx if floor_idx + 1 == ceiling_idx
    end
end

better_find_rotation_pt(words)

def flight_length(mins, arr_of_movie_lengths)
    
    store = {}

    arr_of_movie_lengths.each_with_index do |movie_time, idx|
        store[movie_time] = idx
    end

    arr_of_movie_lengths.each do |movie_time, idx|
        return true if store[min - movie_time] != idx
    end

    false
end

def fibs(num, store = {})
    return 0 if num == 0
    return 1 if num == 1

    return store[num] if store[num]
    val = fibs(num - 1, store) + fibs(num - 2, store)
    return store[num] = val
end

# p fibs(10)

def iterative_fibs(num)
    prev = 1
    prev_prev = 0
    total = prev + prev_prev

    (num - 1).times do |time|
        total = prev  + prev_prev
        prev_prev = prev
        prev = total
    end
    total
end

# p iterative_fibs(10)

# def max_duffel_bag_value(cake_arr, capacity)
#     total = 0

#     cake_arr.select! { |cake| cake[0] != 0 }

#     p cake_arr
#     cost_per_pound = cake_arr.sort do |x, y|
#         (y[1] / y[0]) <=> (x[1] / x[0])
#     end

#     cost_per_pound.each do |cake|
#         weight = cake[0]
#         value = cake[1]
#         next if weight == 0
#         if (capacity / weight) >= 0
#             total += (capacity / weight) * value
#             capacity %= weight
#         end
#     end

#     total
# end

def max_duffel_bag_value(cake_arrays, weight_capacity)

    # we make an array to hold the maximum possible value at every
    # duffel bag weight capacity from 0 to weight_capacity
    # starting each index with value 0
    max_values_at_capacities = [0] * (weight_capacity + 1)
  
    (0..weight_capacity).each do |current_capacity|
  
      # set a variable to hold the max monetary value so far for current_capacity
      current_max_value = 0
        
      cake_arrays.each do |cake_weight, cake_value|

        # if a cake weighs 0 and has a positive value the value of our duffel bag is infinite!
        if (cake_weight == 0 && cake_value != 0)
          return Float::INFINITY
        end
  
        # if the current cake weighs as much or less than the current weight capacity
        # it's possible taking the cake would get a better value
        if (cake_weight <= current_capacity)
  
          # so we check: should we use the cake or not?
          # if we use the cake, the most kilograms we can include in addition to the cake
          # we're adding is the current capacity minus the cake's weight. we find the max
          # value at that integer capacity in our array max_values_at_capacities
          p [current_capacity, cake_weight], max_values_at_capacities
          remaining_capacity = current_capacity - cake_weight
          max_value_using_cake = cake_value + max_values_at_capacities[remaining_capacity]
        #    p max_values_at_capacities
          # now we see if it's worth taking the cake. how does the
          # value with the cake compare to the current_max_value?
          current_max_value = [max_value_using_cake, current_max_value].max
        end
      end
  
      # add each capacity's max value to our array so we can use them
      # when calculating all the remaining capacities
      max_values_at_capacities[current_capacity] = current_max_value
    end
    return max_values_at_capacities[weight_capacity]
  end

# p max_duffel_bag_value([[3, 40], [5, 70]], 9)

class QueueWithStacks
    def initialize
        @stack1 = []
        @stack2 = []
    end

    def enqueue(node)
        @stack1.push(node)
    end

    def dequeue
        if @stack2.empty? && @stack1.empty?
            throw 'nothing to dequeue'
        elsif !(@stack2.empty?)
            return @stack2.pop
        elsif !(@stack1.empty?)
            until @stack1.empty?
                popped = @stack1.pop
                @stack2.push(popped)
            end

            return @stack2.pop
        end
    end
end