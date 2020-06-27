require "byebug"

# def two_sum?(arr, target_sum)
#     # your code here...
# end

def bad_two_sum?(array, target)
    (0...array.length - 1).each do |idx1|
        (idx1 + 1...array.length).each do |idx2|
            return true if array[idx1] + array[idx2] == target
        end
    end
    false
end

arr = [0, 1, 5, 7]
# p bad_two_sum?(arr, 6) # => should be true
# p bad_two_sum?(arr, 10) # => should be false

def okay_two_sum?

p bad_two_sum?(arr, 6) # => should be true
p bad_two_sum?(arr, 10) # => should be false