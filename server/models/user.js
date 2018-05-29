const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');
// Define our model
const userSchema = new Schema({
    email: { type: String,
             unique: true,
             lowercase:true
            },
    password:String
});

// On Save Hook, encrypt password
    // Before saving a model, run this function
userSchema.pre('save', function(next) {     // pre save means --->> before model gets saved , run function(next)
    // get access to the use model ( It is an instance of user model)
    const user = this;                      // content of this function is user model   ----- Can extract information using user.email, user.password
    
    // Generate a salt (It takes some time, so We will use a callback function) and then run callback
    bcrypt.genSalt(10, function(err,salt) {
        if (err) { return next(err); }
        
        // hash(encrypt) our password using the salt ( this takes some amount of time), than call another callback...
        // bcrypt.hash returns hash or error

        bcrypt.hash(user.password, salt, null, function(err, hash) {
            if (err) { return next(err); }

            // overwrite plain text password with encrypted password
            user.password = hash;
            next();   // Very last step is next()( which means go ahead and save the model)
        });
    });
});

userSchema.methods.comparePassword = function(candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if(err) { return callback(err); }
        callback(null,isMatch);
    })
}

// Create the model class
const ModelClass = mongoose.model('user', userSchema);

// Export the model
module.exports = ModelClass;