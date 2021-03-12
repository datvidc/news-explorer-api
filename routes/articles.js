const Articlerouter = require('express').Router();

const { createArticle, returnAllArticles } = require('../controllers/articles');

Articlerouter.post('/', createArticle);
Articlerouter.get('/', returnAllArticles);

module.exports = Articlerouter;
