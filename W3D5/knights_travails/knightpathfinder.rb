class PolyTreeNode
  attr_accessor :pos, :parent, :children
  
  def initialize(pos)
    @pos = pos
    @parent = nil
    @children = []
  end

  

  # def parent=(node)
  #   if self.parent
  #     @parent.children.delete(self)
  #   end

  #   @parent = node
  #   node.children << self  unless node.nil? || node.children.include?(self)
  # end

  # def add_child(child)
  #   child.parent = self
  # end

  # def remove_child(node)
  #   raise 'Not a valid child' if node.parent.nil?
  #   node.parent = nil
  end
end

class KnightPathFinder
  DELTAS = [
    [-1, 2],
    [1, -2],
    [-1, -2],
    [1, 2],
    [-2, 1],
    [2, -1],
    [-2, -1],
    [2, 1]
  ]

  @@size = 8

  def self.valid_moves(pos)
    deltas = DELTAS.clone
    deltas.map! do |(dx, dy)|
      [pos[0] + dx, pos[1] + dy]
    end
  
    deltas
  end

  def initialize(root)
    @root = PolyTreeNode.new(root)
    # @@size = 8
    @considered_positions = [@root]
  end

  def new_move_positions(pos)
    KnightPathFinder.valid_moves(pos).select! do |coordinates|
      coordinates.all? { |coordinate| coordinate.between?(0, @@size - 1) }
    end
  end


  def build_move_tree(target)
    queue = [@root]
    current_pos = queue.pop
    return current_pos if current_pos == target
    
    until queue.empty?
      node = queue.pop
      return node if node.value == target
      node.children.each { |child| queue.unshift(child) }
    end

    nil

  end

  def bfs(target)
    queue = [@root]
    until queue.empty?
      node = queue.pop
      moves_set = next_set_of_moves(node)
      move_set.map! { |node| }
      moves_set.each { |move| node.add_child(PolyTreeNode.new(move)) }
    end

    nil
  end
  
  # def find_path(pos)

  #   @root.dfs(pos)
  #   # root = PolyTreeNode.new(@starting_pos)
  #   valid_moves(@root)
    moves_set = next_set_of_moves(pos)
    moves_set.each { |move| @root.add_child(PolyTreeNode.new(move)) }
  # end


  # def dfs(target)
  #   return self if self.pos == target

  #   self.children.each do |child| 
  #     result = child.dfs(target)
  #     return result unless result.nil?
  #   end

  #   nil
  # end
end

kpf = KnightPathFinder.new([0,0])