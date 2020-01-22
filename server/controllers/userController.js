const { query } = require('../models/dataModel');

const userController = {


    //queries the database using username and password found in the body
    login (req, res, next){
        const { username, password } = req.body;
        //if missing username or password, send back error
        if (!username || !password) return res.send('Missing required information!');

        const queryString = "SELECT * FROM accounts WHERE username = $1::text";
    
        query(queryString, [username], (err, result) => {
            if (err) throw new Error(err);
            if (!result.rows.length) return res.send('User with username not found, please signup to proceed');
            return next();
        })
    },

    //queries the database using username and password found in the body to create a new user. First validates data on the request object and returns success or failure depending on if conditionals pass and query is successful.

    signup (req, res, next){
        //extract username and password from req body
        const { username, password } = req.body
        //if missing username or password, send back error
        if (!username || !password) return res.send('Missing required information!');
        //if not, proceed to build query and send to database
        console.log('in the signup')

        // Add validation to ensure that the username is unique.
        const userNameQueryString = "SELECT username FROM accounts WHERE username = $1::text";
        query(userNameQueryString, [username], (err, result) => {
            if (err) throw new Error(err);
            if (result.rows.length) return res.send('Username already exist.');

            // create a new user
            const queryString = 'INSERT INTO accounts (username, password) VALUES ($1::text, $2::text);';

            query(queryString, [username, password], (err, res) => {
                if (err) throw new Error(err);
                if (!res.locals) res.locals = {};
                res.locals.signupStatus = res;
                console.log(res)
                return next();
            })
        })
    }

}

module.exports = userController;