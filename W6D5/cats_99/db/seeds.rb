# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# == Schema Information
#
# Table name: cats
#
#  id          :bigint           not null, primary key
#  birth_date  :date             not null
#  color       :string           not null
#  name        :string           not null
#  sex         :string(1)        not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null

cat1 = Cat.create(birth_date: '2020/01/01', color: 'green', name: 'Julius', sex: 'F', description: 'We had fun')
cat2 = Cat.create(birth_date: '2018/03/12', color: 'black', name: 'Hairball', sex: 'M', description: 'Shed a lot of hair')
cat3 = Cat.create(birth_date: '1992/09/08', color: 'black', name: 'Michael', sex: 'M', description: 'Good memories')
cat4 = Cat.create(birth_date: '1995/04/13', color: 'orange', name: 'Henry', sex: 'M', description: 'Slept a lot')
cat5 = Cat.create(birth_date: '1925/06/07', color: 'grey', name: 'Barbara', sex: 'F', description: 'Cat with Sass')
cat6 = Cat.create(birth_date: '2010/12/03', color: 'white', name: 'Linda', sex: 'F', description: 'Lots of cuddles')
cat7 = Cat.create(birth_date: '1995/09/19', color: 'black', name: 'Marcus', sex: 'M', description: 'A bit aloof')
cat8 = Cat.create(birth_date: '1995/07/17', color: 'green', name: 'Flora', sex: 'F', description: 'Loves watching TV')
cat9 = Cat.create(birth_date: '2006/03/25', color: 'brown', name: 'Jimbers', sex: 'M', description: 'Eats a lot')