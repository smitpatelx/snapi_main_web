const gc = require('../config/grant_config');
var google = gc.google;
var github = gc.github;

serialize = function (obj) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}

exports.requesting_data = (data) => {
  if (data.client == "google") {
    return serialize({
      code: data.code,
      client_id: google.key,
      client_secret: google.secret,
      redirect_uri: google.callback,
      grant_type: 'authorization_code'
    });
  } else if (data.client == "github") {

    return {
      client_id: github.key,
      client_secret: github.secret,
      redirect_uri: github.callback,
      code: data.code,
      state: data.state
    };
  }
}

exports.requesting_headers = (data) => {
  if (data.client == "google") {
    return {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    };
  } else if (data.client == "github") {
    return {
      headers: {
        Accept: "application/json"
      }
    };
  }
}

exports.requesting_url = (data) => {
  console.log(data);
  if (data.client == "google") {
    return "https://www.googleapis.com/oauth2/v4/token";
  } else if (data.client == "github") {
    return "https://github.com/login/oauth/access_token";
  }
}
