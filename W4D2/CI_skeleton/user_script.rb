require_relative 'super_useful'

puts "'five' == #{convert_to_int('five')}"

feed_me_a_fruit

sam = BestFriend.new('', 1, '')
ham = BestFriend.new('Hamulet', 6, 'Not ham stuff')

ham.talk_about_friendship
ham.do_friendstuff
ham.give_friendship_bracelet

# sam.talk_about_friendship
# sam.do_friendstuff
# sam.give_friendship_bracelet
