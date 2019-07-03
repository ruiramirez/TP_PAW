var JwtStrategy = require("passport-jwt").Strategy;
var ExtractJwt = require("passport-jwt").ExtractJwt;
var userController = require("../controllers/userController");
var config = require("../config/database");

module.exports = function(passport) {
    var opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = config.secret;
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        console.log(jwt_payload._id);
        userController.getUserById(jwt_payload._id, (err, user) => {
            if (err) {
                return done(err, false);
            }

            if(user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        });
    }));
};