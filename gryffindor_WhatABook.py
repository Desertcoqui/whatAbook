
# Title: gryffindor_WhatABook.py
# Author: Danial Purselley
# Author: Ferdinand Detres
# Date: 5 Oct 2022
# Description: connecting to mongoDB
# with python

# import statement
from ast import Or
from pymongo import MongoClient

# connecting to the database
client = MongoClient(
    "mongodb+srv://web335_user:s3cret@buwebdev-cluster-1.078ar.mongodb.net/web335DBretryWrites=true&w=majority")

# database variable
db = client['web335DB']

# display the books collection in legible format
print("Here is our list of books: ")
for book in db.books.find({}, {'_id': 0, 'bookId': 0}):
    print(book)

# print list of books based on user's selected genre
user_Choice = input("Please enter a genre from above:  ")
if user_Choice == 'Educational' or user_Choice == 'horror' or user_Choice == 'drama':
    for book in db.books.find({'genre': user_Choice}, {'title': 1, 'genre': 1}):
        print(book)
else:
    print("The genre you provided is invalid")

# display a customers wishlist

customerWishlist = input(
    "Type corresponding ID next to customers name for their Wish List. John Macro :01, Rebecca Macro: 02, Lucy Macro: 03:  ")

# gives customer name with their wishlist upon entering corresponding customer ID
if customerWishlist == '01' or customerWishlist == '02' or customerWishlist == '03':
    for customer in db.customers.find({'customerId': customerWishlist}, {'firstName': 1, 'lastName': 1, 'wishlistItems': 1}):
        print(customer)
else:
    print("The customerId you provided is invalid")
