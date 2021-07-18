const fs = require("fs");

const reader = fs.createReadStream("./data/foo.txt");

reader.on("open", () => {
  // TODO: write your code here
});

reader.on("data", (chunk) => {
  // TODO: write your code here
});

reader.on("end", () => {
  // TODO: write your code here
});

reader.on("close", () => {
  // TODO: write your code here
});
