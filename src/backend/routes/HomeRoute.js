'use strict';

/**
* Home Route
* path: /
******************** */

const express    = require('express');
const Controller = rootRequire('src/backend/controllers/HomeController');
const router     = express.Router();

router.get('/', Controller.index.get);

module.exports = router;
