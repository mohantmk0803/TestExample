//Example 1 for creating a raw HTTP server.
const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request received");
});

server.listen(2000, () => console.log("Server running"));
