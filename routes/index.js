const router = require('express').Router();
const Auth = require('../middleware/auth');

const Articlerouter = require('./articles');
const UserRouter = require('./users');
const signinRouter = require('./signin');
const signupRouter = require('./signup');

router.use('/signin', signinRouter);
router.use('/signup', signupRouter);

router.use('/articles', Auth, Articlerouter);
router.use('/user', Auth, UserRouter);

module.exports = router;
