const path = require('path');

const express = require('express');

const productsController = require('../controllers/products');
//const rootDir = require('../util/path');
//const adminData = require('./admin'); products array no more in admin-js
//hence we dont need to import it anymore as it is in products controller

const router = express.Router();

router.get('/', productsController.getProduct);//(req, res, next) => {
//   const products = adminData.products;
//   res.render('shop', {
//     prods: products,
//     pageTitle: 'Shop',
//     path: '/',
//     hasProducts: products.length > 0,
//     activeShop: true,
//     productCSS: true
//   });
// });

module.exports = router;
