const Articlerouter = require('express').Router();

const { createArticle } = require('../controllers/articles');

Articlerouter.post('/', createArticle);

module.exports = Articlerouter;
