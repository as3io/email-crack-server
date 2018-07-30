const express = require('express');
const routes = require('./routes');

const app = express();
app.disable('x-powered-by');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('<h1>Hello world!</h1>');
});

// Load routes.
routes(app);

module.exports = app;
