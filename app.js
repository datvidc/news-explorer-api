require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose'); // importing mongoose
const routes = require('./routes/index');
const { celebrate, Joi, errors } = require('celebrate');
const { handleError, ErrorHandler } = require('./middleware/errors');

const { PORT = 3000 } = process.env;
/*

const { celebrate, Joi, errors } = require('celebrate');
const cors = require('cors'); */

const app = express();

mongoose.set('runValidators', true); // Mongo doesnt run validation on update by default

mongoose.connect('mongodb://localhost:27017/news', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
app.use(express.json());

app.use('/', routes);


// only celebrate errors
app.use(errors());

// error handler
app.use((err, req, res, next) => {
  handleError(err, res);
});

process.on('warning', (warning) => {
  console.warn(warning.name);    // Print the warning name
  console.warn(warning.message); // Print the warning message
  console.warn(warning.stack);   // Print the stack trace
});

/* #TODO delete the console.log...not allowed */
app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
