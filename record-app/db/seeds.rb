# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: 'jeff', email: 'jeff@email.com', location: 'Dallas, TX', password: '123456')
User.create(username: 'terry', email: 'terry@email.com', location: 'Houston, TX', password: '123456')
User.create(username: 'vinyldude2001', email: 'vinyldude2001@email.com', location: 'Austin, TX', password: '123456')

Record.create(artist: 'Creedence Clearwater Revival', title: 'Bayou Country', year: 1969, record_label: "Fantasy", country: "US", cat_num: "8387", format: '12"', speed: "33 rpm", disc_condition: 'VG+', sleeve_condition: 'VG', description: "  ", img_url: 'https://upload.wikimedia.org/wikipedia/en/3/37/Creedence_Clearwater_Revival_-_Bayou_Country.jpg', user_id: 1)
Record.create(artist: 'Creedence Clearwater Revival', title: "Cosmo's Factory", year: 1970, record_label: "Fantasy", country: "US", cat_num: "8402", format: '12"', speed: "33 rpm", disc_condition: 'VG+', sleeve_condition: 'VG', description: "  ", img_url: 'https://upload.wikimedia.org/wikipedia/en/4/42/Creedence_Clearwater_Revival_-_Cosmo%27s_Factory.jpg', user_id: 2)
Record.create(artist: 'Creedence Clearwater Revival', title: "Green River", year: 1969, record_label: "Fantasy", country: "US", cat_num: "8393", format: '12"', speed: "33 rpm", disc_condition: 'VG+', sleeve_condition: 'VG', description: "  ", img_url: 'https://upload.wikimedia.org/wikipedia/en/0/04/Creedence_Clearwater_Revival_-_Green_River.jpg', user_id: 3)
Record.create(artist: 'Creedence Clearwater Revival', title: "Green River", year: 1969, record_label: "Fantasy", country: "US", cat_num: "8393", format: '12"', speed: "33 rpm", disc_condition: 'VG+', sleeve_condition: 'VG', description: "  ", img_url: 'https://upload.wikimedia.org/wikipedia/en/0/04/Creedence_Clearwater_Revival_-_Green_River.jpg', user_id: 1)
Record.create(artist: 'Creedence Clearwater Revival', title: "Willy and The Poor Boys", year: 1969, record_label: "Fantasy", country: "US", cat_num: "8397", format: '12"', speed: "33 rpm", disc_condition: 'VG+', sleeve_condition: 'VG', description: "  ", img_url: 'https://upload.wikimedia.org/wikipedia/en/8/85/Willy_and_the_poor_boys.jpg', user_id: 2)
Record.create(artist: 'Creedence Clearwater Revival', title: "Creedence Clearwater Revival", year: 1968, record_label: "Fantasy", country: "US", cat_num: "8382", format: '12"', speed: "33 rpm", disc_condition: 'VG+', sleeve_condition: 'VG', description: "  ", img_url: 'https://upload.wikimedia.org/wikipedia/en/b/b6/Creedence_Clearwater_Revival_-_Creedence_Clearwater_Revival.jpg', user_id: 3)
