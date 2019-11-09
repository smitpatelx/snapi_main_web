const Sequelize = require('sequelize');

//Establishing Database connection
module.exports = new Sequelize('nuxt_snapi', 'smit', 'smitpatelx', {
  dialect: 'postgres',
  host: 'localhost',
  define:{
    timestamps: true
  }
});