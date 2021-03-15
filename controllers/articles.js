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
    /* owner: req.user._id, */
  })
    .then((article) => {
      res.send({ data: article });
    })
    .catch((err) => {
      next(err);
    });
};

module.exports.returnUsersArticles = (req, res, next) => {
  const userID = req.body.id;
  console.log(req.body.id);
  Article.find({ _id: userID })
    .then((articles) => {
      res.send(articles);
    })
    .catch((err) => {
      next(err);
    });
};
