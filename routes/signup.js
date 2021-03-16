const router = require('express').Router();
const users = require('../controllers/users');

router.post('/', (req, res, next) => {
  users.createNewUser(req, res, next);
});

module.exports = router;
