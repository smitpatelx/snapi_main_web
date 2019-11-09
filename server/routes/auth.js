const express = require('express');
const router = express.Router();
const passport = require('passport');
const clients = require('../config/auth-clients');

//Logout
router.get('/logout', (req, res) => {
    //handel with pass
    res.send('Loging out');
});

//Auth with google
router.get('/google', passport.authenticate('google', {
    scope: clients.google.scope
}));
router.get('/google/callback', passport.authenticate('google'), (req, res) => {
    res.send(req.query);
});

//Auth with github
router.get('/github', passport.authenticate('github', {
    scope: clients.github.scope
}));
router.get('/github/callback', passport.authenticate('github'), (req, res) => {
    res.send(req.query);
});

module.exports = router;