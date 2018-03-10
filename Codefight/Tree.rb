def isTreeSymmetric(t)
    return true if root.nil?
    q1 = [root]
    q2 = []

    until q1.empty?
        q3 = []
        q1.each do |node|
            q2.push(node.left, node.right) if node
            q3 = q2.map do |node|
                if node
                    node.val
                else
                    nil
                end
            end
        end
        
        return false if !(q3.empty?) && (q3 != q3.reverse)
        
        q1 = q2
        q2 = []
    end
    true
end

def is_palindrome?(str)
    len = str.length
    i = 0
    while i < len
        return false if str[i] != str[len - i - 1]
        i += 1
    end
    true
end

def hasPathWithGivenSum(t, s)
    return s == 0 if t.nil?

    left = helperSum(t.left, s, res = [t.value]) if t.left
    right = helperSum(t.right, s, res = [t.value]) if t.right

    return left || right
end

def helperSum(t, s, res)
    return res[0] == s if t.left.nil? && t.right.nil?
    
    left = t.left ? helperSum(t.left, s, [res[0] + t.value]) : false
    right = t.right ? helperSum(t.right, s, [res[0] + t.value]) : false
    

    left == s || right == s
end