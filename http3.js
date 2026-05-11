//Example 3
const http = require("http");

const server = http.createServer((req, res) => {
  res.write("$$Hello OneTeam$$");
  res.end();
  console.log(req.url);
  console.log(req.method);

  console.log("request received");
});
server.listen(3000, () => {
  console.log("Server running");
});

//return; - Stop here. Do NOT run the remaining code
//res.end() - It ends the HTTP response and sends it back to the client
