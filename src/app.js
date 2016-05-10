'use strict';

let $ = require('jquery');
let React = require('react');
let ReactDOM = require('react-dom');

let Layout = React.createFactory(require('./shared/components/Layout'));


if (typeof window === 'undefined') {
  $(window).on('load', () => {
    ReactDOM.render(Layout(), $('#reactRoot')[0]);
  });
}
