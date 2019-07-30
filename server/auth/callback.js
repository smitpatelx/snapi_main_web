const express = require('express');
const router = express.Router();
const multer = require('multer'); // v1.0.5
const upload = multer(); // for parsing multipart/form-data


router.get('/connect/:client/callback', function (req, res, next) {
  var callback_res = {
    ...req.params,
    ...req.query
  };

  serialize = function (obj) {
    var str = [];
    for (var p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    return str.join("&");
  }

  res.redirect('/login/client?' + serialize(callback_res));
});

module.exports = router;
