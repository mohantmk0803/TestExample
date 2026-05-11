const http = require("http");

const server = http.createServer((req, res) => {
  const data = {
    message: "Hello OneTeam",
    status: "success",
  };

  // Used to return the HTML
  if (req.url === "/html") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Hello OneTeam</h1>");
    return;
  }

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(data)); // ✅ Convert object to JSON
});

server.listen(2000, () => {
  console.log("Server running on port 3000");
});
