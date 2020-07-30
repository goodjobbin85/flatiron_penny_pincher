# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Transaction.delete_all
User.delete_all

Transaction.create!(amount: 39.99, transaction_type: "withdraw", institution: "Gap")
Transaction.create!(amount: 19.99, transaction_type: "withdraw", institution: "Harold's Chicken")

20.times do
  User.create(name: Faker::Name.name, email: Faker::Internet.email)
end
