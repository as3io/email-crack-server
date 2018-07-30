const handlebars = require('handlebars');
const moment = require('moment');

// Register custom helpers, etc, here...
handlebars.registerHelper('now', () => new Date());
handlebars.registerHelper('moment-format', (date, format) => moment(date).format(format));

module.exports = handlebars;
