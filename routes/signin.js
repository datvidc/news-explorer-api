const signinRouter = require('express').Router();

const signinController = require('../controllers/users');

signinRouter.post('/', signinController);

module.exports = signinRouter;
