function protocol() {
  if (process.env.APP_HTTPS) {
    return 'https'
  } else {
    return 'http'
  }
}

function host() {
  if (process.env.APP_URL && process.env.APP_PORT) {
    return process.env.APP_URL + ':' + process.env.APP_PORT
  } else {
    return 'localhost:8899'
  }
}
const config = {
  "defaults": {
    "protocol": protocol,
    "host": host,
    "transport": "session",
    "state": true
  },
  "google": {
    "key": "1065467195903-c8413grg52bmbgufsknh4blv162kt8h6.apps.googleusercontent.com",
    "secret": "jqKSNoDFfhyZNshJnmBN8V0D",
    "scope": ["openid"],
    "nonce": true,
    "custom_params": {
      "access_type": "offline"
    },
    "callback": "/api/cb?client=google"
  },
  "github": {
    "key": "97460b9b301ac5668e7c",
    "secret": "ba0887304dd95d4d72a71045ddf77d6529f97b12",
    "scope": ["openid"],
    "nonce": true,
    "custom_params": {},
    "callback": "/api/cb?client=github"
  },
}

export default config;
