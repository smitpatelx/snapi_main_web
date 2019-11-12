const express = require('express');
const router = express.Router();
const passport = require('passport');
const clients = require('../config/auth-clients.js');

serialize = function (obj) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}

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
  var user = req.user;
  user = serialize(user);
  res.redirect(303, '/login/getdata?' + user);
});

//Auth with github
router.get('/github', passport.authenticate('github', {
  scope: clients.github.scope
}));
router.get('/github/callback', passport.authenticate('github'), (req, res) => {
  var user = req.user;
  user = serialize(user);
  res.redirect(303, '/login/getdata?' + user);
});

module.exports = router;
