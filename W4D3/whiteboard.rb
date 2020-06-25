# For both of these problems, assume there is a Node class. The node class will take in a value as part of its initialization.

#  You will monkeypatching the following methods:

# 1. Write a method `bfs` that does a breadth-first search starting at a root node. It takes in a target, and a proc as an argument.
# 2. Write a method `dfs` that does a depth-first search starting at a root node. It takes in a target, and a proc as an argument.

# Example usage:
# n1 = Node.new(1) # making a node with a value of 1
# n1.bfs(1) #=> n1
# n1.dfs { |node| node.value == 1 } #=> n1 (found a node with value == 1)

class Node
  # -- Assume nodes have a value, and a attr_reader on value
  # -- Also, assume there are working parent/child-related methods for Node

  { |ele| ele[0] }

  def bfs(target, &prc)
    queue = [self]
    
    until queue.empty?
        curr_node = queue.shift

        curr_node.children.each do |child|
            return child if prc.call(child.value) == target
            queue << child
        end
    end

    nil 
  end

  def dfs(target, &prc)
    
  end

end

#  { |ele| ele.value == target }

#  def bfs(&prc)
#    raise "Must give a proc or target" if prc.nil?
#    queue = [self]
#    until queue.empty?
#      visited = queue.shift
#      return visited if prc.call(visited)
#      queue += visited.children
#    end
#    nil
#  end
