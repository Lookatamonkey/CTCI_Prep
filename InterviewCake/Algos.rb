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