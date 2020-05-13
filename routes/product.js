var express = require('express');
var router = express.Router();

const Product = require('../models/Product')

const male =  '5e5d1d5a03249d2ee09ce758'
const female = '5e5d1d8303249d2ee09ce759'

router.get('/get-men-products', async function(req, res, next) {
    const mens = await Product.find({product_type: male}, function (err, docs) {
        res.json({ men: docs })
    })
})

router.get('/get-women-products', async function(req, res, next) {
    const women = await Product.find({product_type: female}, function (err, docs) {
        res.json({ women: docs })
    })
})
  
module.exports = router;



