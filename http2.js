//Example 2
const http = require("http");

//console.log(http); // Helps to see what's inside HTTP library

const server = http.createServer((req, res) => {
  console.log(req.url); //helps to check the url send from front end
  console.log(req.method); //helps to check the method send from front end
  console.log(req.headers); //helps to check the header information
  console.log(res.statusCode); //helps to check the response status code.
  console.log("request received");
});
server.listen(3000, () => {
  console.log("Server running");
});
