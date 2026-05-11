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

      users.push(newUser);

      res.end("User created");
    });
  }

  // PUT - Replace entire user
  else if (req.method === "PUT" && req.url === "/users") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      const updatedUser = JSON.parse(body);

      const index = users.findIndex((u) => u.id === updatedUser.id);

      if (index !== -1) {
        users[index] = updatedUser;

        res.end("User replaced using PUT");
      } else {
        res.statusCode = 404;
        res.end("User not found");
      }
    });
  }

  // PATCH - Update only specific field
  else if (req.method === "PATCH" && req.url === "/users") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      const updateData = JSON.parse(body);

      const user = users.find((u) => u.id === updateData.id);

      if (user) {
        Object.assign(user, updateData);

        res.end("User partially updated using PATCH");
      } else {
        res.statusCode = 404;
        res.end("User not found");
      }
    });
  }

  // DELETE - Remove user
  else if (req.method === "DELETE" && req.url === "/users") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      const data = JSON.parse(body);

      users = users.filter((u) => u.id !== data.id);

      res.end("User deleted");
    });
  } else {
    res.statusCode = 404;
    res.end("Route not found");
  }
});

server.listen(2000, () => {
  console.log("Server running on port 3000");
});
