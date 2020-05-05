const express = require('express');
const router = express.Router();
const Basket = require('../models/Basket');


router.post('/get-basket', async (req, res, next) => { 

    const { userId } = req.body



    
const findInBasket = await Basket.findOne({userId: userId})

    if(findInBasket){

        res.json({basket: findInBasket.basket});

    }else{
        res.status(404).json({err:'basket not found'})
    }
})


router.post('/save-to-basket', async (req, res, next)=> {

    const { userId, item } = req.body
    console.log(item)
    let duplicated = false;

    let basket = await Basket.findOne({userId:userId});
    // console.log(basket)
    if (basket.basket.length > 0) {
        basket.basket.forEach(product=>{
            if(item._id===product._id){
                duplicated = true;
            }
        })
    }

    if ( duplicated ){
        console.log('product is already in basket')
        res.status(400).json({message: "product is already in basket!"})

    }else{

        Basket.findOneAndUpdate({ userId: userId }, { $push: { basket : item }}).then(response=>{
            console.log('added to basket')
             res.status(200).json( {res: { products : response.basket, message: 'added to basket'} });
        }).catch(error=>{
            res.status(400).send({msg: error})
        })
    }
})


router.post('/remove-from-basket', async (req, res, next) => {

    const { userId, item } = req.body
    const removeingItem = await Basket.update({ userId : userId }, { $pull : { basket : { _id : item._id}}})
    if(removeingItem){
        res.status(200).json({message: 'removed from basket'})
    }else{
        res.status(400).json({message: 'failed to remove from Basket'})
    }

})



module.exports = router;