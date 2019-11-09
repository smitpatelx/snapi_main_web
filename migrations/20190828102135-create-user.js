'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id:{
        type: Sequelize.UUID,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      first_name: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      last_name: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      title: {
        type: Sequelize.STRING(4),
        allowNull: false
      },
      address:{
        type: Sequelize.STRING(200),
        allowNull: false
      },
      state:{
        type: Sequelize.STRING(20),
        allowNull: false
      },
      country:{
        type: Sequelize.STRING(2),
        allowNull: false
      },
      pin_code:{
        type: Sequelize.STRING(10),
        allowNull: false
      },
      primary_email:{
        type: Sequelize.STRING,
        comment: 'Primary email must be unique',
        allowNull: false,
        unique: true
      },
      secondary_email:{
        type: Sequelize.STRING,
        allowNull: true
      },
      email_verified:{
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      phone:{
        type: Sequelize.BIGINT,
        allowNull: true
      },
      extension:{
        type: Sequelize.STRING(5),
        allowNull: false,
        defaultValue: '+1'
      },
      unsubscribed:{
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      avatar:{
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '/_nuxt/assets/images/user_images/default.png'
      },
      password:{
        type: Sequelize.STRING,
        allowNull: false
      },
      google_id:{
        type: Sequelize.STRING,
        comment: 'Google id must be unique',
        allowNull: true,
        unique: true
      },
      google_token:{
        type: Sequelize.STRING,
        allowNull: true
      },
      google_refresh_token:{
        type: Sequelize.STRING,
        allowNull: true
      },
      github_id:{
        type: Sequelize.STRING,
        comment: 'Github id must be unique',
        allowNull: true,
        unique: true
      },
      github_token:{
        type: Sequelize.STRING,
        allowNull: true
      },
      github_refresh_token:{
        type: Sequelize.STRING,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};