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

p get_products_of_all_ints_except_at_index([1, 7, 3, 4]) == [84, 12, 28, 21]

