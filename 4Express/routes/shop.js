const path = require('path');
const rootDir = require('../util/path');
//can use either rootdir or path
//totally upto us

const express = require('express');

const router = express.Router();

router.get('/', (req,res,next) => {
    //console.log('In another middleware!');
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;