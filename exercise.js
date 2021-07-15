const fs = require('fs')
const chokidar = require('chokidar');
const path = require("path");

const getAbsolutePath = (relativePath) => {
  return path.join(__dirname, relativePath);
};

const startSync = (sourceDir, destinationDir) => {
    // TODO: implement your solution here
};

startSync(
  getAbsolutePath("./excercise/sourcedir"),
  getAbsolutePath("./excercise/destinationdir")
);
