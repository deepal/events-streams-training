const app = require("express")();
const fs = require("fs");
const path = require("path");

app.get("/file/:filename", (req, res) => {
  // TODO: write your code here
});

app.listen(3001, () => console.log("file server is listening..."));
