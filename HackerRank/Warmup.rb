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

sum_diag_one = 0
sum_diag_two = 0

i = 0
len = a[0].length 
while i < len
    sum_diag_one += a[i][i]
    i += 1
end

j = 0
while j < len
    sum_diag_two += a[len-j - 1][j]
    j += 1
end

positive = 0.0
negative = 0.0
zero = 0.0
arr.each do |num|
    if num === 0
        zero += 1
    elsif num > 0
        positive += 1
    else
        negative += 1
    end
end



i = 1
res = ""
until i == n + 1
    (n - i).times do |spaces|
        res += " "
    end
    i.times do |hashes|
        res += "#"
    end
    puts res
    res = ""
    i += 1
end

# Mini-Max Sum
lowest_num = arr[0]
greatest_num = arr[0]
total = 0 
arr.each do |num|
    total += num
    num < lowest_num   ? lowest_num = num : nil
    num > greatest_num  ? greatest_num = num : nil
end

print (total - greatest_num).to_s + " " + (total - lowest_num).to_s

def birthdayCakeCandles(n, ar)
    tallest = 0
    counter = 1
    ar.each do |candle|
       if candle > tallest
           tallest = candle
           counter = 1
       elsif candle == tallest
           counter += 1
       end
    end
    
    counter
end
