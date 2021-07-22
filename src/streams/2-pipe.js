const fs = require('fs')

fs.createReadStream("./data/foo.txt")
    .pipe(process.stdout)