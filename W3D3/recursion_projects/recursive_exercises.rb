require "byebug"

def range(start, finish)
    return [] if finish <= start

    range(start, finish - 1) << finish - 1
end

p range(1,5)

def sum_array_rec(arr)
    return 0 if arr.empty?

    arr[0] + sum_array_rec(arr[1..-1])
end

p sum_array_rec(range(1,5))

def sum_array_itter(arr)
    sum = 0
    arr.each { |ele| sum += ele }
    sum
end

p sum_array_itter(range(1,5))

def exp1(b, n)
    return 1 if n == 0

    b * exp1(b, n - 1)
end

p exp1(2, 3)
p exp1(2, 40)
p exp1(3, 13)

def exp2(b, n)
    return 1 if n == 0
    return b if n == 1 

    if n.even?
        exp = exp2(b, n / 2)
        exp * exp
    else
        exp = exp2(b, (n - 1) / 2) 
        b * exp * exp
    end
end

p exp2(2, 3)
p exp2(2, 40)
p exp2(3, 13)

def deep_dup(arr)
    return [arr] if !arr.is_a?(Array)
    duplicated = []
    arr.each do |ele|
        if !ele.is_a?(Array)
            duplicated << ele
        else
            duplicated << deep_dup(ele)
        end
    end
    duplicated
end

# robot_parts = [
#   ["nuts", "bolts", "washers"],
#   ["capacitors", "resistors", "inductors"]
# ]

robot_parts = [1, [2], [3, [4]]]

duplicated = deep_dup(robot_parts)
p robot_parts
p duplicated
duplicated[1] << "LEDs"
p robot_parts
p duplicated

def fib_rec(n)
    return [1] if n == 1
    return [1, 1] if n == 2
    fibs = fib_rec(n - 1)
    fibs << fibs[-1] + fibs[-2]
end

puts

p fib_rec(7)
p fib_rec(10)
p fib_rec(2)

def bsearch(arr, target)
    mid = arr.length / 2

    return nil if arr.empty?
    return mid if arr[mid] == target

    if target < arr[mid]
        bsearch(arr[0...mid], target)
    else
        half2 = bsearch(arr[mid + 1..-1], target)
        return nil if half2 == nil
        mid + 1 + half2
    end

end

p bsearch([1, 2, 3], 1) # => 0
p bsearch([2, 3, 4, 5], 3) # => 1
p bsearch([2, 4, 6, 8, 10], 6) # => 2
p bsearch([1, 3, 4, 5, 9], 5) # => 3
p bsearch([1, 2, 3, 4, 5, 6], 6) # => 5
p bsearch([1, 2, 3, 4, 5, 6], 0) # => nil
p bsearch([1, 2, 3, 4, 5, 7], 6) # => nil
p bsearch(range(1, 100), 86)

def merge_sort(arr)
    return arr if arr.length < 2
    mid = arr.length / 2
    merge(merge_sort(arr[0...mid]), merge_sort(arr[mid..-1]))
end

def merge(chunk1, chunk2)
    merged = []
    i, j = 0, 0

    until i == chunk1.length && j == chunk2.length 
        if i == chunk1.length
            merged << chunk2[j]
            j += 1
        elsif j == chunk2.length || chunk1[i] < chunk2[j]
            merged << chunk1[i]
            i += 1
        else
            merged << chunk2[j]
            j += 1
        end
    end

    merged
end

p merge([3, 5, 8], [2, 3, 4, 9])
p merge_sort([6,5,3,1,8,7,2,4,20])

def subsets(arr)
    # debugger
    return [[]] if arr.empty?

    subs = subsets(arr[0..-2])
    subs += deep_dup(subs)
    i = subs.length / 2
    (i...subs.length).each { |idx| subs[idx] << arr[-1] }
    subs
end

p subsets([]) # => [[]]
p subsets([1]) # => [[], [1]]
p subsets([1, 2]) # => [[], [1], [2], [1, 2]]
p subsets([1, 2, 3])
# => [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

def permutations(arr)
    return [arr] if arr.length < 2
    smaller_perms = permutations(arr[1..-1]) # [[1]]
    val = arr[0]
    perms = []
    smaller_perms.each do |small_perm|
        (0..small_perm.length).each do |i|
            perms << place_ele(small_perm, val, i)
        end
    end
    perms
end

def place_ele(arr, val, i)
    # debugger
    new_arr = Array.new(arr.length + 1)
    new_arr[i] = val
    j = 0
    arr.each do |ele|
        if new_arr[j].nil?
            new_arr[j] = ele
            j += 1
        else
            j += 1
            new_arr[j] = ele
            j += 1
        end
    end
    new_arr
end

p permutations([1, 2, 3, 4]) # => [[1, 2, 3], [1, 3, 2],
                        #     [2, 1, 3], [2, 3, 1],
                        #     [3, 1, 2], [3, 2, 1]]

                        # [1, 2] -> [1, 2] [2, 1]
                        # [1] [2] ->  

def make_greedy_change(amt, coins = [25, 10, 5, 1])
    # debugger
    return [] if amt == 0

    coins.each do |coin|
        if coin <= amt
            return make_greedy_change(amt - coin, coins) << coin
        end
    end
end

p make_greedy_change(39, [25, 10, 5, 1])
p make_greedy_change(14, [10, 7, 1])

def make_better_change(amt, coins = [25, 10, 5, 1])
    # debugger
    return [] if amt == 0
    solutions = []
    coins.each do |coin|
        if coin <= amt
            wanted = coins.select { |c| c <= coin }
            change = make_better_change(amt - coin, wanted) << coin
            solutions << change
        end
    end
    # p "solutions: #{solutions}"

    solutions.min_by { |sol| sol.length }
end

p make_better_change(39, [25, 10, 5, 1])
p make_better_change(14, [10, 7, 1])
p make_better_change(73, [10, 8, 7, 3, 1])
p make_better_change(45, [10, 8, 7, 3, 1])