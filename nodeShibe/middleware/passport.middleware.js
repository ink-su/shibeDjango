const { ExtractJwt, Strategy } = require('passport-jwt');
const { User }      = require('../models');
const CONFIG        = require('../config/config');
const {to}          = require('../services/util.service');

module.exports = function(passport){
  var opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = CONFIG.jwt_encryption;

  passport.use(new Strategy(opts, async function(jwt_payload, done) {
    User.findById(jwt_payload.user_id)
      .then((user) => {
        return done(null, user || false);
      })
      .catch((err) => {
        done(err, false)
      });
  }));
}