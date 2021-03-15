const signinRouter = require('express').Router();

const signinController = require('../controllers/signin');

signinRouter.post('/', signinController);

module.exports = signinRouter;