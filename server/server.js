const path = require('path')
const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('hello')
})

app.get('/login', (req, res) => {
    res.json(res.locals.loginStatus);
})

app.listen(3000,() => {
    console.log('Server listening on PORT 3000')
})

