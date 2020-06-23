require "byebug"

class PolyTreeNode
  attr_accessor :pos, :parent, :children
  
  def initialize(pos)
    @pos = pos
    @parent = nil
    @children = []
  end

  def inspect
    "pos: #{@pos} parent: #{@parent.nil? ? [] : @parent.pos} children: #{@children.empty? ? [] : @children.map { |child| child.pos}}"
  end

  def parent=(node)
    if self.parent
      @parent.children.delete(self)
    end

    @parent = node
    node.children << self unless node.nil? || node.children.include?(self)
  end

  def add_child(child)
    child.parent = self
  end

  def remove_child(node)
    raise 'Not a valid child' if node.parent.nil?
    node.parent = nil
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

  def self.valid_moves(node)
    deltas = DELTAS.clone

    deltas.map! do |(dx, dy)|
      [node.pos[0] + dx, node.pos[1] + dy]
    end

    final_moves = []

    deltas.each do |coordinates|
      final_moves << coordinates if coordinates.all? { |coordinate| coordinate.between?(0, @@size - 1) }
    end

    final_moves
  end

  attr_reader :root, :considered_positions, :tree

  def initialize(root)
    @root = PolyTreeNode.new(root)
    @considered_positions = [@root.pos]
    @tree = self.build_move_tree
  end

  def new_move_positions(node)
    new_moves = KnightPathFinder.valid_moves(node).select do |move|
      !@considered_positions.include?(move)
    end

    new_moves.map! { |move| PolyTreeNode.new(move) }

    @considered_positions += new_moves.map { |move| move.pos }

    new_moves
  end

  def build_move_tree
    queue = [@root]
    
    until queue.empty?
      current_pos = queue.pop

      new_moves = new_move_positions(current_pos)
      
      new_moves.each do |move|
        current_pos.add_child(move)
        queue.unshift(move)
      end
    end

    @root
  end
  
  def find_path(end_pos)
    queue = [@root]
    @considered_positions = [@root.pos]
    
    until queue.empty?
      current_node = queue.pop

      return trace_path_back(current_node) if current_node.pos == end_pos

      new_moves = new_move_positions(current_node)
      
      new_moves.each do |move|
        current_node.add_child(move)
        queue.unshift(move)
      end
    end
  end

  def trace_path_back(end_node)
    current_node = end_node

    path = []
    until current_node.parent.nil?
      path.unshift(current_node.pos)
      current_node = current_node.parent
    end
    path.unshift(current_node.pos)

    path
  end
end