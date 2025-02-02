// Create a nested library structure
const library = {
    name: "Central Library",
    shelves: [
      {
        shelfId: 1,
        books: [
          { title: "1984", author: "George Orwell" },
          { title: "To Kill a Mockingbird", author: "Harper Lee" }
        ]
      },
      {
        shelfId: 2,
        books: [
          { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
          { title: "The Catcher in the Rye", author: "J.D. Salinger" }
        ]
      }
    ]
  };
  
  // Accessing nested properties
  console.log(library.shelves[0].books[0].title); // Output: "1984"
  
  // Adding a new book to the first shelf
  library.shelves[0].books.push({ title: "Brave New World", author: "Aldous Huxley" });
  console.log(library.shelves[0].books);