const express = require('express');
const router = express.Router();
const Basket = require('../models/Basket');
const male =  '5e5d1d5a03249d2ee09ce758';
const female = '5e5d1d8303249d2ee09ce759';


router.get('/get-basket',  (req, res, next) => { 
    
    const basket =  Basket.find({product_type: female}, function (err, docs) {

        res.json({basket: docs});
    })
})

router.post('/save-to-basket', (req, res, next)=> {
    
    const { name, description, images, rating, prices, colors, sizes} = req.body.item
        
    if(req.body.item.product_type === male){

        const maleProduct = new Basket({

            product_type: male,
            name: name,
            description: description,
            images: images,
            prices: prices,
            rating: rating,
            sizes:  sizes,
            colors: colors
        });

        maleProduct.save().then( newRecord => {
            const mens =  Basket.find({product_type: male}, function (err, docs) {

                res.json({items: docs});
            })
        });
    };

    if(req.body.item.product_type === female){

        const maleProduct = new Basket({
        
                product_type: female,
                name: name,
                description: description,
                images: images,
                prices: prices,
                rating: rating,
                sizes:  sizes,
                colors: colors
        });

        maleProduct.save().then(newRecord => {

            const women =  Basket.find({product_type: female}, function (err, docs) {

                res.json({items: docs});

            })
        });
    };

})




module.exports = router;