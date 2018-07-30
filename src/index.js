const env = require('./env');
const output = require('./utils/output');
const pkg = require('../package.json');
const app = require('./express');

const { PORT } = env;

const server = app.listen(PORT);
output.write(`Express app '${pkg.name}:v${pkg.version}' listening on port ${PORT}`);

module.exports = server;
