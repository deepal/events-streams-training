const fs = require("fs");

const reader = fs.createReadStream("./data/foo.txt");

reader.on("open", () => {
  console.log("stream opened!");
});

reader.on("data", (chunk) => {
  console.log("got some data: ", chunk.toString());
});

reader.on("end", () => {
  console.log("stream ended!");
});

reader.on("close", () => {
  console.log("stream closed!");
});
