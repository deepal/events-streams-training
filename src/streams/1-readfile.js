const app = require('express')()
const fs = require('fs')

app.get('/file/:filename', (req, res) => {

})

app.listen(3001, () => console.log('file server is listening...'))