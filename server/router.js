const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });  // we are telling it not make a cookie ( which is a default behaviour of passport)
const requireSignin = passport.authenticate('local', { session: false }); 

module.exports = function(app) {
    app.get('/', requireAuth, function(req,res) {
        res.send({ hi: "there"});
    });

    app.post('/signin',requireSignin, Authentication.signin)

    app.post('/signup', Authentication.signup);
}
