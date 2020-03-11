const express = require('express');
const router = express.Router();
const Basket = require('../models/Basket');
const male =  '5e5d1d5a03249d2ee09ce758';
const female = '5e5d1d8303249d2ee09ce759';

router.post('/get-basket', async (req, res, next) => { 
    console.log(req.body)
    const { userID } = req.body

    const findInBasket = await Basket.findOne({user_ID: userID})
        if(findInBasket){

            res.json({basket: findInBasket.basket});
        }else{
            res.status(404).json({err:'basket not found'})
        }
})

router.post('/save-to-basket', async (req, res, next)=> {

    const { userID, item } = req.body

    const findBasketAndUpdate = await Basket.findOneAndUpdate({ user_ID: userID }, { $push: { basket : item }})

        if(findBasketAndUpdate){
            res.json({items: findBasketAndUpdate.basket});
        }else{
            res.status(404).json({err:'basket not found'})
        }
})




module.exports = router;