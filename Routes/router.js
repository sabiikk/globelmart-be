const express = require('express');
const router= new express.Router();

const projectController = require('../Controllers/productController');


//defing paths
router.get('/all-products',projectController.getAllProductsController);


module.exports = router;

