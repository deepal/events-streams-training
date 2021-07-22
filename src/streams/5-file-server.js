const app = require("express")();
const fs = require("fs");
const path = require("path");

function getAbsolutePath(fileName) {
  return path.join(__dirname, '../../data', fileName)
}

app.post("/file/:filename", (req, res) => {
  fs.createReadStream(getAbsolutePath(req.params.filename))
    .pipe(res)
});

app.listen(3001, () => console.log("file server is listening..."));
