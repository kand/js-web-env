'use strict';

require('babel-register');

let express = require('express');
let expressHandlebars  = require('express-handlebars');
let path = require('path');

let app = express();

const APP_PORT = 80;
const DIR_TEMPLATES = path.join(__dirname, 'src', 'shared', 'templates');

app.engine('hbs', expressHandlebars({
  defaultLayout: 'index',
  extname: 'hbs',
  layoutsDir: DIR_TEMPLATES
}));
app.set('view engine', 'hbs');
app.set('views', DIR_TEMPLATES);

app.use('/static', express.static('public'));
app.use('', require('./src/server/core'));

app.listen(APP_PORT, () => {
  console.log(`Server on port ${APP_PORT}`);
});
