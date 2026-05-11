const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/" || req.url == "/home") {
    res.write("$$Hello OneTeam$$");
    res.end();
  } else if (req.url == "/about") {
    res.write("This is a about page");
    res.end();
  } else {
    res.writeHead(404); //if we are not passing this then brwser will get 200- ok status
    res.write("Invalid URL");
    res.end();
  }

  console.log("request received");
});
server.listen(3000, () => {
  console.log("Server running");
});
