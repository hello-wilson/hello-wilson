const path = require('path')
const express = require('express');
const app = express();
const userController = require('./controllers/userController');
const messageController = require('./controllers/messageController');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('hello')
})



app.post('/signup', userController.signup, (req, res) => {
    res.send('hello there')
})



app.listen(3000,() => {
    console.log('Server listening on PORT 3000')
})

