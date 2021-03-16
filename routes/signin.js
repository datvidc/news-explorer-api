const signinRouter = require('express').Router();

const signUserIn = require('../controllers/users');

signinRouter.post('/', signUserIn);

module.exports = signinRouter;
