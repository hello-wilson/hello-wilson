const path = require('path')
const express = require('express');
const app = express();
const userController = require('./controllers/userController');
const messageController = require('./controllers/messageController');
const bcrypt = require('bcrypt');


app.get('/', (req, res) => {
    res.send('hello')
})



app.post('/signup', (req, res) => {
    res.json(res.locals.loginStatus);
})



app.listen(3000,() => {
    console.log('Server listening on PORT 3000')
})

