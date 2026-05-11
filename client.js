const http = require("http");

//1️⃣ Client prepares payload
//✅ Converts JS object → JSON string
//✅ This becomes the request body

const data = JSON.stringify({
  id: 1,
  name: "mohan",
});

const options = {
  hostname: "localhost",
  port: 3000,
  path: "/users",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": data.length,
  },
};

const req = http.request(options, (res) => {
  res.on("data", (chunk) => {
    console.log("Request data :" + data);
  });
});
req.write(data);
req.end();
