const router = require('express').Router();

const Articlerouter = require('./articles');
const signinRouter = require('./signin');
const signupRouter = require('./signup');

router.use('/signin', signinRouter);
router.use('/signup', signupRouter);

router.use('/articles', Articlerouter);

module.exports = router;
