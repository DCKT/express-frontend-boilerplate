'use strict';

const path   = require('path');
const helmet = require('helmet');

module.exports = function(app, express) {

  app.use(helmet());

  app.set('views', path.join(__dirname, '../src/frontend/pages'));
  app.set('view engine', 'jade');
  

  app.use(express.static(path.join(__dirname, '../public')));
  app.use(express.static(path.join(__dirname, '../uploads')));

};
