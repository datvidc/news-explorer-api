const Articlerouter = require('express').Router();

const { createArticle, returnUsersArticles } = require('../controllers/articles');

Articlerouter.post('/', createArticle);
Articlerouter.put('/', returnUsersArticles);

module.exports = Articlerouter;
