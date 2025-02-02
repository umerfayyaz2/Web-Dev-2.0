// Create a book object with a method
const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    summary: function() {
      return `${this.title} by ${this.author}, published in ${this.year}.`;
    }
  };
  
  // Log the book summary
  console.log(book.summary()); // Output: "The Great Gatsby by F. Scott Fitzgerald, published in 1925."