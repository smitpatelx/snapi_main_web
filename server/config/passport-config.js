const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const GithubStrategy = require('passport-github2');

const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const clients = require('./auth-clients');
const User = require('../../models/user.js');
require('dotenv').config();
var env = process.env;

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findByPk(id).then((user) => {
      done(null, user);
  });
});

passport.use(
    new GoogleStrategy({
        clientID: clients.google.clientID,
        clientSecret: clients.google.clientSecret,
        callbackURL: clients.google.callbackURL
    }, (accessToken, refreshToken, profile, done) => {

        var jsn_data = profile._json;

        if(typeof jsn_data.sub !== 'undefined'){
            User.findOrCreate({
                where: {
                google_id: jsn_data.sub
                },
                defaults:{
                google_id: jsn_data.sub,
                primary_email: jsn_data.email,
                first_name: jsn_data.given_name,
                last_name: jsn_data.family_name,
                avatar: jsn_data.picture,
                google_token: accessToken,
                google_refresh_token: refreshToken
                }
            }).then(([user, created]) => {
                var new_or_existing_user = user.get({
                plain: true
                });
                // console.log('User Exist: ', new_or_existing_user);
                // console.log('New User Created: ',created);

                done(null, new_or_existing_user);
            }).catch(error => {
                console.log('Error Creating User: ',error)
            });
        }
    })
)

passport.use(
    new GithubStrategy({
        clientID: clients.github.clientID,
        clientSecret: clients.github.clientSecret,
        callbackURL: clients.github.callbackURL
    }, (accessToken, refreshToken, profile, cb) => {

        var full_name = profile.name;
        var fn = String(full_name).split(' ')[0];
        var ln = String(full_name).split(' ')[1];

        if(typeof profile.id !== 'undefined'){
            User.findOrCreate({
                where: {
                    github_id: profile.id
                },
                defaults:{
                    first_name: fn,
                    last_name: ln,
                    avatar: profile.avatar_url,
                    github_token: accessToken,
                    github_refresh_token: refreshToken
                }
            }).then(res => {
                console.log(res)
            }).catch(error => {
                console.log(error)
            });
        }
    })
)
