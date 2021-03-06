const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // importing bcrypt
const validator = require('validator');
const { ErrorHandler } = require('../middleware/errors'); // importing error handler

const userSchema = new mongoose.Schema({
  name: { //  name — username, string from 2 to 30 characters, required field
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },

  password: {
    type: String,
    required: true,
    select: false, // from lesson auth part 2
  },

  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function validemail(email) {
        return validator.isEmail(email);
      },
      message: 'Kindly use a valid email address',
    },
  },
});

userSchema.statics.findUserByCredentials = function usercred(email, password, next) {
  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        throw new ErrorHandler(401, 'Incorrect email or password');
      }
      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            throw new ErrorHandler(401, 'Incorrect email or password');
          }
          return user; // making user available
        })
        .catch((err) => {
          next(err);
        });
    })
    .catch((error) => {
      next(error);
    });
};

userSchema.methods.returnJson = function removepass() {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

module.exports = mongoose.model('user', userSchema);
