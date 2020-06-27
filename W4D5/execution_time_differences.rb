require "byebug"

def my_min(arr)
min = 0
    
    (0...arr.length-1).each do |idx1|
        (idx1..arr.length-1).each do |idx2|
            if arr[idx1] < arr[idx2] && arr[idx1] < min
                min = arr[idx1]
            end
        end
    end
min
end

# list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
# p my_min(list)  # =>  -5

def my_min_2(arr)
    min = 0

    arr.each do |ele|
        if ele < min
            min = ele
        end
    end
    min
end


# list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
# p my_min_2(list)  # =>  -5

def largest_contiguous_subsum(arr)
    subs = []

    (0...arr.length).each do |i|
        (i + 1...arr.length).each do |j|
            subs << [arr[i], arr[j]]
        end
    end

    subs.map! do |sub| 
        sub[0] + sub[1]
    end

   subs.max
    
end

# list = [5, 3, -7]
# p largest_contiguous_subsum(list) # => 8

# # possible sub-sums
# [5]           # => 5
# [5, 3]        # => 8 --> we want this one
# [5, 3, -7]    # => 1
# [3]           # => 3
# [3, -7]       # => -4
# [-7]          # => -7

    # list = [2, 3, -6, 7, -6, 7]
 
    
def sub_sum2(arr)
    # debugger
    curr_sum = nil
    largest_sum = nil
    
    arr.each do |ele|

        if curr_sum.nil?
            curr_sum = ele
# debugger
        elsif curr_sum < 0 && curr_sum < ele
            curr_sum = ele
        elsif curr_sum < 0 && !(curr_sum < ele)
            curr_sum = ele
        else
            curr_sum += ele
        end
        
        if largest_sum.nil? || curr_sum > largest_sum
            largest_sum = curr_sum
        end
        # if curr_sum < 0
        #     curr_sum = 0
        # end 
    end

    if largest_sum == 0 
        largest_sum = curr_sum
    end

    largest_sum 
end

list1 = [5, 3, -7]
p sub_sum2(list1) # => 8

list2 = [2, 3, -6, 7, -6, 7]
p sub_sum2(list2) # => 8 (from [7, -6, 7])

list3 = [-5, -1, -3]
p sub_sum2(list3) # => -1 (from [-1])

