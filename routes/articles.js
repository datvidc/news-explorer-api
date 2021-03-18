const Articlerouter = require('express').Router();
const { celebrate, Joi } = require('celebrate'); // importing the celebreate validation lib

const { createArticle, returnUsersArticles, killArticle } = require('../controllers/articles');

Articlerouter.post('/', celebrate({
  body: Joi.object().keys({
    keyword: Joi.string().required(),
    title: Joi.string().required(),
    text: Joi.string().required(),
    date: Joi.string().required(),
    source: Joi.string().uri().required(),
    link: Joi.string().uri().required(),
    image: Joi.string().uri().required(),
  }),
}), createArticle);

Articlerouter.get('/', celebrate({
  headers: Joi.object()
    .keys({
      authorization: Joi.string().required(),
    })
    .options({ allowUnknown: true }),
}), returnUsersArticles);

Articlerouter.delete('/:id', celebrate({
  headers: Joi.object()
    .keys({
      authorization: Joi.string().required(),
    })
    .options({ allowUnknown: true }),
}), killArticle);

module.exports = Articlerouter;
