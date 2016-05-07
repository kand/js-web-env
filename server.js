'use strict';

let express = require('express');

const settings = {
  APP_PORT: process.env.APP_PORT || 80
};

const app = express();

app.get(/\//, (req, res) => {
  res.send('hello world')
});

app.listen(settings.APP_PORT, () => {
  console.log('Running on ' + settings.CLIENT_HOSTNAME + ':' + settings.APP_PORT);
});
