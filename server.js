const http = require("http");

let users = [];

const server = http.createServer((req, res) => {
  // GET - Fetch all users
  if (req.method === "GET" && req.url === "/users") {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(users));
  }

  // POST - Create new user
  else if (req.method === "POST" && req.url === "/users") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      const newUser = JSON.parse(body);

      users.push(newUser); //Appends newUser to the end of the users array
      console.log("Response sent");
      res.end("User created");
    });
  } else {
    res.statusCode = 404;
    res.end("Route not found");
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
