'use strict';
require('./utils/rootRequire')();

const express = require('express');
const http    = require('http');
const Router  = rootRequire('src/backend/Router');
const app     = express();
const server  = http.createServer(app);
const log     = rootRequire('utils/log.js');

/**
* MIDDLEWARE
********************* */
require('./config/middleware')(app, express);

/**
* ROUTES
********************* */
Router.forEach(route => {
  
  if (route.middleware) {
    app.use(route.path, route.middleware, route.handler);
  }
  else {
    app.use(route.path, route.handler);
  }

});

app.use((req, res, next) => {
  res.status(404);
  res.render('misc/404', {
    title: 'Page introuvable !',
  });
});

server.listen(4444, () => {
  log.notice('\nServer started on localhost:4444')
});

