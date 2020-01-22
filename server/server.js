const path = require('path')
const express = require('express');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

// controllers
const userController = require('./controllers/userController');
const messageController = require('./controllers/messageController');

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => { 
    res.send('hello');
})



app.post('/signup', userController.signup, (req, res) => {
    res.send('hello there')
});
app.post('/login', userController.login, (req, res) => {
    res.send('hello I just logged in');
});


app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  });

app.listen(3000,() => {
    console.log('Server listening on PORT 3000')
})

