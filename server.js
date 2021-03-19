const app = require('./app.js');

const { PORT = 3000 } = process.env;

app.listen(PORT, () => {
  // TODO remove all console logs
// console.log(`App listening on port ${PORT}`);
});
