require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose'); // importing mongoose
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes/index');
const { handleError } = require('./middleware/errors');
const { requestLogger, errorLogger } = require('./middleware/logger');
const { limiter } = require('./middleware/limiter');
const helmet = require('helmet');

const { PORT = 3000 } = process.env;

const { DB_ADRESS } = require('./utils/consts');

const app = express();

mongoose.set('runValidators', true); // Mongo doesnt run validation on update by default

mongoose.connect(DB_ADRESS, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
app.use(express.json());

app.use(helmet());

// Getting the app to use cors
app.use(cors());

app.use(limiter);

// enabling the request logger
app.use(requestLogger);

app.use('/', routes);

app.use(errorLogger); // enabling the error logger

// only celebrate errors
app.use(errors());

// error handler
app.use((err, req, res, next) => {
  handleError(err, res);
});

/* #TODO delete the console.log...not allowed */
app.listen(PORT, () => {
// console.log(`App listening at port ${PORT}`);
});
