require('dotenv').config();
var env = process.env;

const express = require('express')
const bodyParser = require('body-parser')
const consola = require('consola')
const session = require('express-session')
const passport = require('passport')
const cookieSession = require('cookie-session')
const app = express()
const authRoutes = require('./routes/auth');
const {
  Nuxt,
  Builder
} = require('nuxt')

//Database Connect
require('./database/test_db');

// for parsing application/json
app.use(bodyParser.json());
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));

// app.use(express.json());
// app.use(express.urlencoded({
//   extended: false
// }));

app.use(cookieSession({
  maxAge: 30*24*60*60*1000,
  keys: [env.PASSPORT_SECRET]
}));

// app.use(session({
//   secret: env.PASSPORT_SECRET,
//   resave: true,
//   saveUninitialized: true
// }));

app.use(passport.initialize());
app.use(passport.session());
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
  consola.info({
    level: 3,
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
