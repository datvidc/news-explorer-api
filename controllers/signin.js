const bcrypt = require('bcryptjs'); // importing bcrypt
const jwt = require('jsonwebtoken'); // importing JWT

const User = require('../models/user');

module.exports.signinController = (req, res, next) => {
  const {
    password, email, name,
  } = req.body;
};
