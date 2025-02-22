let apiResponse = {
    id: 1,
    title: "JavaScript Basics",
    author: { name: "John Doe", country: "USA" },
    tags: ["programming", "web development"]
  };
  
  let { title, author: { name }, tags } = apiResponse;
  console.log("Title:", title, "Author:", name, "Tags:", tags);
  // Output: Title: JavaScript Basics Author: John Doe Tags: ["programming", "web development"]