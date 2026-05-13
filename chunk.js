const http = require("http");

const server = http.createServer((req, res) => {
  let body = [];
  // Fires MULTIPLE times – each chunk is a piece of the body
  req.on("data", (chunk) => {
    console.log("📦 Received Chunk:", chunk.toString());
    body += chunk;
  });

  // Only fires ONCE – when all chunks are received
  req.on("end", () => {
    console.log("✔️ Final Complete Body:", body);

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Request received successfully");
  });
});

server.listen(3000, () => console.log("Server running on port 3000"));
