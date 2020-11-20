const dotenv = require('dotenv');
if (process.env.NODE_ENV !== 'test') {
  dotenv.config();
}

const bodyParser = require('body-parser');
const express = require('express');

const routes = require('./routes/index.js');
const { bearerAuth } = require('./utils/middlewares.js');

// Config
// ----------------------------------------
const app = express();
app.set('port', process.env.PORT || 5000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Webhooks
// ----------------------------------------
app.use('/webhooks', routes.webhooks);

// Routes protected under bearerAuth
// ----------------------------------------
app.use(bearerAuth);
app.use('/cards', routes.cards);
app.all('/test', (req, res) => {
  return res.send({
    ok: true,
    data: req.body,
  });
});

// Run server & export for tests
// ----------------------------------------
if (process.env.NODE_ENV !== 'test') {
  app.listen(app.get('port'), () => {
    // eslint-disable-next-line no-console
    console.log(`App running on port ${app.get('port')}`);
  });
}
module.exports = app;
