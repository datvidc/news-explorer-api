const Article = require('../models/article');
const { ErrorHandler } = require('../middleware/errors'); // importing error handler

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
    owner: req.user._id,
  })
    .then((article) => {
      res.send({ data: article });
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        throw new ErrorHandler(400, err.message);
      }
    })
    .catch((err) => {
      next(err);
    });
};

module.exports.returnUsersArticles = (req, res, next) => {
  const userID = req.user._id;

  Article.find({ owner: userID })
    .then((articles) => {
      res.send(articles);
    })
    .catch((err) => {
      next(err);
    });
};

module.exports.killArticle = (req, res, next) => {
  const articleId = req.params.id;

  Article.findOneAndDelete(
    // mongoDB shell method. I can give some filters
    { _id: articleId, owner: { _id: req.user._id } },
  )
    .then((article) => {
      if (article) {
        res.send(article);
      }
      else {
        throw new ErrorHandler(404, 'server could not find the requested ressource');
      }
    })
    .catch((err) => {
      next(err);
    });
};
