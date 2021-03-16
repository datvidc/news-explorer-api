const signupRouter = require('express').Router();
const createNewUser = require('../controllers/users');

signupRouter.post('/', createNewUser);

module.exports = signupRouter;
