'use strict';

const index = {
  get(req, res) {
    res.render('home/index');
  },
}

module.exports = { 
  index,
}