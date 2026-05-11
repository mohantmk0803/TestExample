//One way of getting the post request from frontend.
//HTML is also send from here, when url is typed and pressed enter contrl comes here and

//Type	Purpose
//CSV .on()	Process file
//req.on()	Read incoming request
//socket.on()	Listen to server events

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/data") {
    let body = "";
    //used to re-contruct the input request body, Node.js sends the request body piece by piece, and you must collect those pieces.
    req.on("data", (chunk) => {
      console.log(chunk.toString());
      console.log(chunk);
      body += chunk;
    });

    req.on("end", () => {
      //"end" - this be run when all the chunks are received.
      res.end("POST received: " + body);
    });
    return;
  }

  // Serve HTML form
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
    <form method="POST" action="/data">
      <input name="username" />
      <button type="submit">Send</button>
    </form>
  `);
});

server.listen(2000, () => {
  console.log("Server running");
});
