require "byebug"

module Searchable
  def bfs(target)
    queue = [self]
    until queue.empty?
      node = queue.pop
      return node if node.value == target
      node.children.each { |child| queue.unshift(child) }
    end

    nil
  end

  def dfs(target)
    return self if self.value == target

    self.children.each do |child| 
      result = child.dfs(target)
      return result unless result.nil?
    end

    nil
  end
end

class PolyTreeNode
  include Searchable

  def initialize(value)
    @value = value
    @parent = nil
    @children = []
  end

  def parent=(node)
    if self.parent
      @parent.children.delete(self)
    end

    @parent = node
    node.children << self  unless node.nil? || node.children.include?(self)
  end

  def add_child(child)
    child.parent = self
  end

  def remove_child(node)
    raise 'Not a valid child' if node.parent.nil?
    node.parent = nil
  end

  def inspect
    { 'value' => @value, 'parent' => @parent, 'children' => @children }
  end
  
  attr_reader :parent, :children, :value
end
