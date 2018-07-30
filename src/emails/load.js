const fs = require('fs');
const handlebars = require('../handlebars');

const readFile = name => new Promise((resolve, reject) => {
  fs.readFile(`${__dirname}/${name}.hbs`, (err, data) => (err ? reject(err) : resolve(data.toString())));
});

module.exports = async (name, context) => {
  const source = await readFile(name);
  const template = handlebars.compile(source);
  return template(context);
};
