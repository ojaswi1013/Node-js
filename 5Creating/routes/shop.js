const path = require('path');
const rootDir = require('../util/path');
//can use either rootdir or path
//totally upto us

const express = require('express');

const adminData = require('./admin');

const router = express.Router();

router.get('/', (req,res,next) => {
    res.render('shop');
});

module.exports = router;