const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'patrick',
    email: 'patrick@email.com',
    password: 'password123'
  },
  {
    username: 'ashlee',
    email: 'ashlee@email.com',
    password: 'password123'
  },
  {
    username: 'ranger',
    email: 'ranger@email.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;