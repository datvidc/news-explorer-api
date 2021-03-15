const signupRouter = require('express').Router();
const signupController = require('../controllers/users');

signupRouter.post('/', signupController);

module.exports = signupRouter;
