const router = require('express').Router();
const { celebrate, Joi } = require('celebrate'); // importing the celebreate validation lib

const users = require('../controllers/users');

router.get('/me', celebrate({
  params: Joi.object().keys({
    id: Joi.string().min(24).max(24).required()
      .alphanum(),
  }),
}), (req, res, next) => {
  users.getUserById(req, res, next);
});

module.exports = router;
