const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'qwerty', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
