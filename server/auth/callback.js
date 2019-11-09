const express = require('express');
const router = express.Router();
const multer = require('multer'); // v1.0.5
const upload = multer(); // for parsing multipart/form-data
const paramFun = require('./requesting_params');
const pToken = require('./process_token');
const axios = require('axios');

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

  // console.log(paramFun.requesting_url(callback_res));

  axios
    .post(
      paramFun.requesting_url(callback_res),
      paramFun.requesting_data(callback_res),
      paramFun.requesting_headers(callback_res),
    )
    .then(result => {
      
      var data = {
        ...result.data,
        ...req.params
      };
      pToken.process_token(data);
      // res.redirect('/login/getdata?' + serialize(data));
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
