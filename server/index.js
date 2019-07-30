const express = require('express')
const bodyParser = require('body-parser')
const consola = require('consola')
const session = require('express-session')
const grant = require('grant-express')
const {
  Nuxt,
  Builder
} = require('nuxt')
const app = express()
const callbackRoutes = require('./auth/callback');
const RedisStore = require('connect-redis')(session)

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({
  extended: false
})) // for parsing application/x-www-form-urlencoded
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

//Handels Auth Callbacks
app.use(callbackRoutes);

// REQUIRED: any session store - see /examples/express-session-stores
app.use(session({
  store: new RedisStore(),
  secret: 'grant',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: true
  }
}))
// mount grant
const grantConfig = require('./grant_config.js');
app.use(grant(grantConfig))

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host,
    port
  } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
