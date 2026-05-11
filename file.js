const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) throw err;

  const updatedData = data.replace("mohan", "kumaar");

  fs.writeFile("data.txt", updatedData, (err) => {
    if (err) throw err;
    console.log("File updated successfully");
  });
});
