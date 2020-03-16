const express = require('express');
const router = express.Router();
const Basket = require('../models/Basket');


router.post('/get-basket', async (req, res, next) => { 

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
    

    const findBasketAndUpdate = await Basket.findOneAndUpdate({ user_ID: userID }, { $push: { basket : item }}).then(newRecord => {

        if(newRecord){

            res.json({items: newRecord.basket});
        }
        
    }).catch(err => {
        console.log(err)
    })




    // const handleDuplicate = await Basket.findOne({user_ID: userID}, { basket : { $elemMatch: {_id: item._id } } } ).then((f) => {
    //     const handleDuplicate = await Basket.findOne({user_ID: userID}, { basket : item } ).then((f) => {

    //     if(f){
    //         console.log(f)
            
    //     }else{
    //         console.log('!')
    //     }

    // }).catch(err => {
    //     console.log(err)
    // })


    // if(handleDuplicate){

    //     res.status(404).json({items: 'product is already exsist!'})

    // }else{

        // const findBasketAndUpdate = await Basket.findOneAndUpdate({ user_ID: userID }, { $push: { basket : item }})
        // if(findBasketAndUpdate){
        //     res.json({items: findBasketAndUpdate.basket});
        // }
    // }
})


router.post('/remove-from-basket',async (req, res, next) => {

    const { userID, item } = req.body

    const removeingItem = await Basket.update({ user_ID : userID }, { $pull : { basket : { _id : item._id}}})
    if(removeingItem){
        res.status(200).json({item: 'removed from basket'})
    }

})



module.exports = router;