require 'byebug'
class Employee
  attr_reader :name, :title, :salary
  attr_accessor :boss

  def initialize(name, title, salary, boss)
    @name = name
    @title = title
    @salary = salary
    @boss = boss
    put_on_payroll unless @boss.nil?
  end
  
  def bonus(multiplier)
    return (@salary) * multiplier
  end
  
  def put_on_payroll
    @boss.employees << self
  end

end

class Manager < Employee
  attr_reader :employees
    def initialize(name, title, salary, boss)
        super
        @employees = []
    end

    def bonus(multiplier)
      sum = 0
        @employees.each do |man| 
            sum += man.salary
            if man.class != Employee
                man.employees.each { |emp| sum += emp.salary }
            end
        end 
        sum * multiplier
    end


end

ned = Manager.new("Ned", "Founder", 1000000, nil)
darren = Manager.new("Darren", "TA Manager", 78000, ned)
shawna = Employee.new("Shawna", "TA", 12000, darren)
david = Employee.new("David", "TA", 10000, darren)