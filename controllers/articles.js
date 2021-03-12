const Article = require('../models/article');

module.exports.createArticle = (req, res, next) => {
  const {
    keyword,
    title,
    text,
    date,
    source,
    link,
    image,
  } = req.body;

  Article.create({
    keyword,
    title,
    text,
    date,
    source,
    link,
    image,
    
  })
    .then((article) => {
      res.send({ data: article });
    })
    .catch((err) => {
      next(err);
    });
};
