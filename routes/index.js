const router = require('express').Router();

const Articlerouter = require('./articles');

router.use('/articles', Articlerouter);

module.exports = router;
