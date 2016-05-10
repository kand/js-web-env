'use strict';

let React = require('react');
let ReactDOMServer = require('react-dom/server');
let router = require('express').Router();

let Layout = React.createFactory(require('../shared/components/Layout'));


let MiddlewareDataStore = (req, res, next) => {
  req.middlewares = {};
  return next();
};

router.all('*', MiddlewareDataStore);

router.get('/', (req, res) => {
  res.render('__react-base', {
    reactOutput: ReactDOMServer.renderToString(Layout())
  });
});

module.exports = router;
