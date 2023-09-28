const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

//search
router.use('/search', siteController.search);

//home
router.use('/', siteController.index);


module.exports = router;