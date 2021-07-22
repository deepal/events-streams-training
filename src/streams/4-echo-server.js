const app = require("express")();

app.post("/", (req, res) => {
  // req is a readable stream and res is a writable stream
  // by piping them, we are reflecting the request body back in the response
  // start the server and try this curl: 
  //      curl -d"hey there" http://localhost:3001/
  req.pipe(res)
});

app.listen(3001, () => console.log("echo server is listening..."));
