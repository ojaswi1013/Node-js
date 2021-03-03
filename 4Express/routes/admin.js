const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
//can use rootdir or path
//totally upto us

const router = express.Router();

router.get('/add-product', (req,res,next) => {
    //console.log('In another middleware!');
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/product', (req,res,next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;