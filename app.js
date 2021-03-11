const express = require('express');
const routes = require('./routes/index');

const PORT = 3000;
/* require('dotenv').config();

const mongoose = require('mongoose'); // importing mongoose
const { celebrate, Joi, errors } = require('celebrate');
const cors = require('cors'); */

const app = express();

app.use('/', routes);

/* #TODO delete the console.log...not allowed */
app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
