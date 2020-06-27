def first_anagram?(str1, str2)
    perms = str1.split("").permutation.to_a
    perms.map! { |perm| perm.join }
    perms.include?(str2)
end

# p first_anagram?("gizmo", "sally")    #=> false
# p first_anagram?("elvis", "lives")    #=> true

def second_anagram?(str1, str2)
    str1.each_char do |char1|
        str2.each_char.with_index do |char2, idx|
            if char2 == char1
                str2 = str2[0...idx] + str2[idx + 1..-1]
                break
                return false
            end
        end
    end

    str2 == ''
end

# p second_anagram?("gizmo", "sally")    #=> false
# p second_anagram?("elvis", "lives")    #=> true

def third_anagram?(str1, str2)
    str1.split('').sort.join == str2.split('').sort.join
end

# p third_anagram?("gizmo", "sally")    #=> false
# p third_anagram?("elvis", "lives")    #=> true

def fourth_anagram?(str1, str2)
    # hash1 = Hash.new(0)
    # hash2 = Hash.new(0)

    # str1.each_char {|char| hash1[char] += 1}
    # str2.each_char {|char| hash2[char] += 1}

    # hash1 == hash2

    return false unless str1.length == str2.length

    hash1 = Hash.new(0)
    str1.each_char {|char| hash1[char] += 1}
    str2.each_char do |char|
        return false unless hash1.has_key?(char)
        hash1[char] += 1
    end

    hash1.each {|k, v| return false if v.odd?}

    return true
    
end

p fourth_anagram?("abbcd", "acdee")    #=> false
p fourth_anagram?("gizmo", "sally")    #=> false
p fourth_anagram?("elvis", "lives")    #=> true