# PHASE 2

class CoffeeError < StandardError; end
class NotBesties < StandardError; end
class StringTooShort < StandardError; end
class FruitError < StandardError; end

def convert_to_int(str)
  begin
    Integer(str)
  rescue ArgumentError #=> err
    return nil
  end
end

# PHASE 3
FRUITS = ["apple", "banana", "orange"]

def reaction(maybe_fruit)
  if FRUITS.include? maybe_fruit
    puts "OMG, thanks so much for the #{maybe_fruit}!"
  else 
    raise FruitError
  end 
end

def feed_me_a_fruit
  puts "Hello, I am a friendly monster. :)"

  puts "Feed me a fruit! (Enter the name of a fruit:)"

  begin
    # raise StandardError if maybe_fruit != 'coffee'
    # raise CoffeeError if maybe_fruit == 'coffee'
    maybe_fruit = gets.chomp
    reaction(maybe_fruit)
  rescue FruitError
    puts "Not one of my favorite fruits."
    if maybe_fruit == 'coffee'
      puts "Yummy! That was coffee!"
      retry
    end
  end
  
end  

# PHASE 4
class BestFriend
  def initialize(name, yrs_known, fav_pastime)
    @name = name
    @yrs_known = yrs_known
    @fav_pastime = fav_pastime
    begin
      raise StringTooShort if @name.length <= 0 || @fav_pastime.length <= 0
      raise NotBesties if @yrs_known < 5
    rescue StringTooShort
      puts "String input too short."
    rescue NotBesties
      puts "Sorry, I don't know you like that."
    end
  end

  def talk_about_friendship
    puts "Wowza, we've been friends for #{@yrs_known} years. Let's be friends for another #{1000 * @yrs_known}."
  end

  def do_friendstuff
    puts "Hey bestie, let's go #{@fav_pastime}. Wait, why don't you choose. 😄"
  end

  def give_friendship_bracelet
    puts "Hey bestie, I made you a friendship bracelet. It says my name, #{@name}, so you never forget me." 
  end
end


