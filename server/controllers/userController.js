const { query } = require('../models/dataModel');
const bcrypt = require('bcrypt');
const saltRounds = 10

const userController = {

    // For the messages table, we'd have fields like 'id', 'body', 'sender_uid', 'created_at' right?

    //queries the database using username and password found in the body
    login (req, res, next){
        const { username, password } = req.body;
        //if missing username or password, send back error
        if (!username || !password) return res.send('Missing required information!');

        const queryString = "SELECT username, password FROM accounts WHERE username = $1::text";
        query(queryString, [username], (err, result) => {
            if (err) throw new Error(err);
            if (!result.rows.length) return res.send('User with username not found, please signup to proceed');

            // check if the password is correct
            // check to ensure that the user plain password text is equal to the saved hash password.
            bcrypt.compare(password, result.rows[0].password, function(err, isValid) {
                if (err) return res.send('An error occurred, please contact administrator');
                if (!isValid) return res.send('Incorrect password, please try again.');
                return next();
            });
        })
    },

    //queries the database using username and password found in the body to create a new user. First validates data on the request object and returns success or failure depending on if conditionals pass and query is successful.

    signup (req, res, next){
        //extract username and password from req body
        const { username, password } = req.body
        //if missing username or password, send back error
        if (!username || !password) return res.send('Missing required information!');

        // Add validation to ensure that the username is unique.
        const userNameQueryString = "SELECT username FROM accounts WHERE username = $1::text";
        query(userNameQueryString, [username], (err, result) => {
        if (err) throw new Error(err);
        if (result.rows.length) return res.send('Username already exist.');
        
        //if not, proceed to build query and send to database
        //hash the password
        bcrypt.hash(password, saltRounds, (err, hash) => {
            if (err) return next(err);
            const queryString = 'INSERT INTO accounts (username, password) VALUES ($1::text, $2::text);';
            
            query(queryString,[username, hash], (err, res) => {
                if (err) return next(err);
                if (!res.locals) res.locals = {};
                res.locals.signupStatus = res;
                return next();
            })
        } )
    })

    }

}

module.exports = userController;