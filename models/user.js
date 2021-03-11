const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: { //  name — username, string from 2 to 30 characters, required field
    type: String,
    /* required: true,  all fields are optional by default */
    minlength: 2,
    maxlength: 30,
    default: 'Jacques Cousteau',
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

module.exports = mongoose.model('user', userSchema);
