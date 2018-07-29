const {
  cleanEnv,
  port,
} = require('envalid');

module.exports = cleanEnv(process.env, {
  PORT: port({ desc: 'The port that express will run on.', default: 8472 }),
});
