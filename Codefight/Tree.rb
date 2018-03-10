# def isTreeSymmetric(t)
#     return true if t.nil?
#     q1 = []
#     q2 = []
    
#     until q2.empty?
#         q1.push(t)
#         q1.each do |node|
#             q2 << node.left
#             q2 << node.right
#         end

#         res_str = ""
#         q2.each do |child| 
#             if child.nil?
#                 res_str += "nil"
#             else
#                 res_str += child.value.to_s
#             end
#         end

#         return false if is_palindrome?(res_str) == false
#        q1 = q2
#        q2 = []
#     end
#     true
# end

# def is_palindrome?(str)
#     len = str.length
#     i = 0
#     while i < len
#         return false if str[i] != str[len - i - 1]
#         i += 1
#     end
#     true
# end

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