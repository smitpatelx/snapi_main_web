const Sequelize = require('sequelize');

require('dotenv').config();
var env = process.env;
//Establishing Database connection
module.exports = new Sequelize(env.PGSQL_DATABASE, env.PGSQL_USER, env.PGSQL_PASSWORD, {
  dialect: 'postgres',
  logging: false,
  host: env.PGSQL_HOST,
  define:{
    timestamps: true
  }
});
