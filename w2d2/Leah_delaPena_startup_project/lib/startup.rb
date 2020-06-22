require "employee"

class Startup
    attr_reader :name, :funding, :salaries, :employees

    def initialize(name, funding, salaries)
        @name = name
        @funding = funding
        @salaries = salaries
        @employees = []
    end

    def valid_title?(title)
        salaries.has_key?(title)
    end

    def >(other_startup)
        funding > other_startup.funding
    end

    def hire(name, title)
        raise 'not a title at this company' if !salaries.has_key?(title)
        employees << Employee.new(name, title)
    end

    def size
        employees.length
    end

    def pay_employee(employee)
        total_salaries = @employees.inject(0) do |total, employee|
            emp_title = employee.title
            total += salaries[emp_title]
        end

        difference = self.funding - total_salaries
        salary = salaries[employee.title]
        
        if difference > salary
            employee.pay(salaries[employee.title])
            @funding -= salaries[employee.title]
        else
            raise "startup doesn't have enough money"
        end
    end

    def payday
        employees.each { |employee| pay_employee(employee) }
    end

    def average_salary
        total_salaries = @employees.inject(0) do |total, employee|
            emp_title = employee.title
            total += salaries[emp_title]
        end

        total_salaries/size
    end

    def close
        @employees = []
        @funding = 0
    end

    def acquire(other_startup)
        @funding += other_startup.funding

        other_salaries = other_startup.salaries.select { |k, v| !salaries.has_key?(k) }
        other_salaries.each { |k, v| salaries[k] = v }

        employees.concat(other_startup.employees)
        
        other_startup.close
    end
end
