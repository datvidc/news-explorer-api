const Articlerouter = require('express').Router();

const { createArticle } = require('../controllers/articles');

Articlerouter.post('/', createArticle);
Articlerouter.get('/', () => {
  return 'working';
});

module.exports = Articlerouter;
