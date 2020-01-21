const path = require('path')
const express = require('express');
const app = express();

app.use(express.static('client'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'))
})

app.get('/dist/bundle.js', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/bundle.js'))
})

app.listen(3000,() => {
    console.log('Server listening on PORT 3000')
})