// # Title: whatAbook Database modeling and scripts
// # Author: Professor Krasso
// # Date: 1 Oct 2022
// # Description: modeling the database/scripts
//https://www.google.com/search?q=mongodb+hs+document+validation+with+array&source=hp&ei=r1w4Y8OkEMa7qtsPu6qBkAQ&iflsig=AJiK0e8AAAAAYzhqv65EBM9lVRMhAKLTn3mkMsSuYwhT&ved=0ahUKEwiDuIWirL_6AhXGnWoFHTtVAEIQ4dUDCAk&uact=5&oq=mongodb+hs+document+validation+with+array&gs_lcp=Cgdnd3Mtd2l6EAMyBwghEKABEAo6CAguELEDEIMBOgsIABCABBCxAxCDAToFCAAQgAQ6EQguEIAEELEDEIMBEMcBENEDOggIABCABBCxAzoLCC4QgAQQsQMQ1AI6CAguEIAEELEDOgsIABCABBCxAxDJAzoFCAAQkgM6CwguEIAEEMcBEK8BOg4ILhCABBCxAxCDARDUAjoLCC4QgAQQsQMQgwE6CAgAEIAEEMkDOgcIABCABBAKOggIABCxAxCDAToKCAAQgAQQRhD7AToGCAAQHhAWOgoIABAeEA8QFhAKOgUIIRCgAToFCCEQqwI6BAgAEA06CAgAEB4QCBANOgUIABCGAzoICCEQHhAWEB06CgghEB4QDxAWEB1QAFiXVmCmWGgBcAB4AYABwQKIAd41kgEKMTIuMTYuMTIuMpgBAKABAQ&sclient=gws-wiz

// Use bottom string in CLI to connect to mongosh

// mongosh "mongodb+srv://web335db.ljzn1ss.mongodb.net/web335DB" --apiVersion 1 --username web335_user

// Delete the customers and books collections.
db.customers.drop();
db.books.drop();

//create customers and books collection using document validation
db.createCollection("customers", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      properties: {
        firstName: {
          bsonType: "string",
        },
        lastName: {
          bsonType: "string",
        },
        customerId: {
          bsonType: "string",
        },
        wishlistItems: {
          books: [
            {
              title: {
                bsonType: "string",
              },
              genre: {
                bsonType: "string",
              },
              author: {
                bsonType: "string",
              },
              bookId: {
                bsonType: "string",
              },
            },
          ],
        },
      },
    },
  },
});

db.createCollection("books", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      properties: {
        title: {
          bsonType: "string",
        },
        genre: {
          bsonType: "string",
        },
        author: {
          bsonType: "string",
        },
        bookId: {
          bsonType: "string",
        },
      },
    },
  },
});

//create customers with wishlist
johnMacro = {
  firstName: "John",
  lastName: "Macro",
  customerId: "01",
  wishlistItems: [
    {
      books: [
        {
          title: "New York City",
          genre: "Educational",
          author: "Steve Van Winkle",
          bookId: "1001",
        },
        {
          title: "New Jersey",
          genre: "Educational",
          author: "Nancy Zack",
          bookId: "1002",
        },
      ],
    },
  ],
};

rebeccaMacro = {
  firstName: "Rebecca",
  lastName: "Macro",
  customerId: "02",
  wishlistItems: [
    {
      books: [
        {
          title: "New Jersey",
          genre: "Educational",
          author: "Nancy Zack",
          bookId: "1002",
        },
      ],
    },
  ],
};
lucyMacro = {
  firstName: "Lucy",
  lastName: "Macro",
  customerId: "03",
  wishlistItems: [
    {
      books: [
        {
          title: "New York City",
          genre: "Educational",
          author: "Steve Van Winkle",
          bookId: "1001",
        },
        {
          title: "Pennsylvania",
          genre: "Educational",
          author: "Rick Otto",
          bookId: "1003",
        },
      ],
    },
  ],
};

// Insert the customer documents
db.customers.insertOne(johnMacro);
db.customers.insertOne(rebeccaMacro);
db.customers.insertOne(lucyMacro);

//create books

newYorkCity = {
  title: "New York City",
  genre: "Educational",
  author: "Steve Van Winkle",
  bookId: "1001",
};

jersey = {
  title: "New Jersey",
  genre: "Educational",
  author: "Nancy Zack",
  bookId: "1006",
};

penn = {
  title: "Pennsylvania",
  genre: "Educational",
  author: "Rick Otto",
  bookId: "1003",
};

sheDied = {
  title: "She died today",
  genre: "horror",
  author: "Shelby twin",
  bookId: "1005",
};
wolf = {
  title: "Wolf Man Winkle",
  genre: "horror",
  author: "Nick Reese",
  bookId: "1002",
};
blackTuesday = {
  title: "Black Tuesday",
  genre: "horror",
  author: "Rick Otto",
  bookId: "1004",
};

redTuesday = {
  title: "redTuesday",
  genre: "drama",
  author: "Rick Otto",
  bookId: "1007",
};

//insert book documents
db.books.insertOne(newYorkCity);
db.books.insertOne(jersey);
db.books.insertOne(penn);
db.books.insertOne(sheDied);
db.books.insertOne(wolf);
db.books.insertOne(blackTuesday);
db.books.insertOne(redTuesday);
//!!!End of Database creation!!!

//queries

//query to find a list of books
db.books.find();

//display books by genre
db.books.aggregate([{ $sort: { genre: 1 } }]);

//display books by author
db.books.aggregate([{ $sort: { author: 1 } }]);

//display books by bookId
db.books.aggregate([{ $sort: { bookId: 1 } }]);
