const express = require('express')
const bodyParser = require('body-parser')
const consola = require('consola')
const session = require('express-session')
const {
  Nuxt,
  Builder
} = require('nuxt')
const app = express()
const authRoutes = require('./routes/auth');
// const RedisStore = require('connect-redis')(session)

//Database Test
require('./database/test_db');

// for parsing application/json
app.use(bodyParser.json());
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

app.use(session({
  secret: 'asdasdsad',
  resave: true,
  saveUninitialized: true
}));

require('./config/passport-config');

//Auth routes setup
app.use('/auth', authRoutes);

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
