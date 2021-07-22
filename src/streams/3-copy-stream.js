const fs = require('fs')

const reader = fs.createReadStream("./data/foo.txt")

const writer1 = fs.createWriteStream('./data/copy1.txt')
const writer2 = fs.createWriteStream('./data/copy2.txt')

reader.pipe(writer1)
reader.pipe(writer2)