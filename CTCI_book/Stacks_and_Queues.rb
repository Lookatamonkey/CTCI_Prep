def sort_stack(stack)
    stack1 = stack
    stack2 = []
    popped = stack1.pop
    
    if stack1.last > popped
        popped2 = stack1.pop
        stack2.push(popped2)
        stack2.push(popped)
        
    else
        stack2.push(popped)
        popped = stack1.pop
        stack2.push(popped)
    end

    until stack1.empty?
        popped = stack1.pop
        counter = 0
        until stack2.empty? || stack2.last > popped
            stack1.push(stack2.pop)
            counter += 1
        end
        stack2.push(popped)
        until counter == 0
            stack2.push(stack1.pop)
            counter -= 1
        end
    end

    stack2
end

p sort_stack([5, 1, 3, 4, 2, 6, 7])