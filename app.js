const express = require('express');
const mongoose = require('mongoose'); // importing mongoose
const routes = require('./routes/index');

const PORT = 3000;
/* require('dotenv').config();


const { celebrate, Joi, errors } = require('celebrate');
const cors = require('cors'); */

const app = express();

mongoose.set('runValidators', true); // MMongo doesnt run validation on update by default

mongoose.connect('mongodb://localhost:27017/news', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
app.use(express.json());

app.use('/', routes);

/* #TODO delete the console.log...not allowed */
app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
