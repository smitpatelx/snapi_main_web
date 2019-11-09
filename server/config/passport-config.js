const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const GithubStrategy = require('passport-github2');

const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const clients = require('./auth-clients');
const User = require('../../models/user.js');

passport.use(
    new GoogleStrategy({
        clientID: clients.google.clientID,
        clientSecret: clients.google.clientSecret,
        callbackURL: clients.google.callbackURL
    }, (accessToken, refreshToken, profile, cb) => {

        User.findOrCreate({ 
            where: {
                [Op.or]:{
                    google_id: profile.sub, 
                    primary_email: profile.email
                }   
            },
            defaults:{
                first_name: profile.given_name,
                last_name: profile.family_name,
                avatar: profile.picture,
                google_token: accessToken,
                google_refresh_token: refreshToken
            }
        }).then(res => {
            console.log(res)
        }).catch(error => {
            console.log(error)
        });
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
    })
)