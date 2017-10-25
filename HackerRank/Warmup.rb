def solveMeFirst (a, b)
    a + b  
end

def simpleArraySum(n, ar)
    sum = 0
    ar.each do |el|
        sum += el
    end
    sum
end

def solve(a0, a1, a2, b0, b1, b2)
    a = [a0, a1, a2]
    b = [b0, b1, b2]
    
    a_score = 0
    b_score = 0
    
    a.each_index do |i|
        if a[i] > b[i]
            a_score += 1
        elsif b[i] > a[i]
            b_score += 1
        end
    end
    [a_score, b_score]
end


def solve(grades)
    grades.each_with_index do |grade, i|
        if (grade % 5 >= 3) && ( grade >= 38 )
            grades[i] = grade + 5 - ( grade % 5 )
        end
    end
    grades
end

def aVeryBigSum(n, ar)
    sum = 0
    ar.each do |num|
        sum += num
    end
    sum
end
