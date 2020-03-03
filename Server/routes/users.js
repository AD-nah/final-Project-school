var express = require('express');
var router = express.Router();
// const Product = require('../models/Product')

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


  // women.forEach((item => {

  //   const newProduce = new Product({
  //     product_type: '5e5d1d8303249d2ee09ce759',
  //     name: item.name,
  //     description: item.description,
  //     image: item.image,
  //     price: item.price
  //   })
  //   newProduce.save()
  // }))

module.exports = router;



