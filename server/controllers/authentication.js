const jwt = require('jwt-simple');
const User = require('../models/user');   // This is a class of Users
const config = require('../config');

// Function that takes user ID and encode it with user ID.

function tokenForUser(user) {
    const timestamp = new Date().getTime();
    return jwt.encode( { sub: user.id , iat: timestamp }, config.secret);
}  // By convention Json web-token has a sub , and iat property

exports.signin = function (req, res, next) {
    // User has already had their email and password auth'd
    // We just need to give them a token
    res.send( { token: tokenForUser(req.user) });
}

exports.signup = function (req, res, next) {
    const email = req.body.email.toLowerCase();
    const password = req.body.password;
    if(!email || !password) {
        return res.status(422).send({error: 'You must provide email and password'});
    }
    // See if a user with the given email exists 
    User.findOne({ email: email },function(err,existingUser) {
        if (err) {
            return next(err);
        }
        // If a user with email does exist, return an error
        if(existingUser) {
            return res.status(422).send({ error: 'Email is in use'});
        }


    // If a user with email does NOT exist, create a save use record
    const user = new User({    // ----> This just creates a new user 
        email: email,
        password: password
    });
    user.save(function(err) {      /// ---> Saving User to the database;
        if (err) { return next(err); }
    // Respond to request indicating the user is created
        // res.json({success: true}); 
        res.json({ token: tokenForUser(user) }); 
        });
    });
}