const express = require('express');

const app = express();
app.disable('x-powered-by');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('<h1>Hello world!</h1>');
});

module.exports = app;
