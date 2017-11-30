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