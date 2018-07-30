const email = require('./email');

module.exports = (app) => {
  app.use('/email', email);
};
