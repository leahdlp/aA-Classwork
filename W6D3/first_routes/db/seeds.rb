# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
jim = User.create!({username: 'Jim'})
pam = User.create!({username: 'Pam'})
dwight = User.create!({username: 'Dwight'})
michael = User.create!({username: 'Michael'})
creed = User.create!({username: 'Creed'})
andy = User.create!({username: 'Andy'})
stanley = User.create!({username: 'Stanley'})

artwork1 = Artwork.create!({title: 'marshmallow dreamscape', image_url: 'peeps.co', artist_id: jim.id})
artwork2 = Artwork.create!({title: 'candyland', image_url: 'candyland.com', artist_id: pam.id})
artwork3 = Artwork.create!({title: 'windy stairs', image_url: 'stairsarecrazy.org', artist_id: dwight.id})
artwork4 = Artwork.create!({title: 'I cut my ear off' , image_url: 'vangoh.com' , artist_id: michael.id})
artwork5 = Artwork.create!({title: 'The Scream' , image_url: 'scream.net', artist_id: creed.id})
artwork6 = Artwork.create!({title: 'superman2' , image_url: 'heroes.biz', artist_id: andy.id})
artwork7 = Artwork.create!({title: 'goldfinger_poster' , image_url: 'james_bond.uk', artist_id: stanley.id})

share1 = ArtworkShare.create!({artwork_id: artwork2.id, viewer_id: michael.id})
share2 = ArtworkShare.create!({artwork_id: artwork2.id, viewer_id: andy.id})
share3 = ArtworkShare.create!({artwork_id: artwork3.id, viewer_id: pam.id})
share4 = ArtworkShare.create!({artwork_id: artwork7.id, viewer_id: dwight.id})
share5 = ArtworkShare.create!({artwork_id: artwork5.id, viewer_id: jim.id})
share6 = ArtworkShare.create!({artwork_id: artwork3.id, viewer_id: creed.id})

