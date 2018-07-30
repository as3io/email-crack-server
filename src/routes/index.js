const sandbox = require('./sandbox');

module.exports = (app) => {
  app.use('/sandbox', sandbox);
};
