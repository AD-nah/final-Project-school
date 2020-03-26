const express = require('express');
const router = express.Router();
const Basket = require('../models/Basket');


router.post('/get-basket', async (req, res, next) => { 

    const { userId } = req.body


console.log(userId)

const findInBasket = await Basket.findOne({userId: userId})

    if(findInBasket){

        res.json({basket: findInBasket.basket});

    }else{
        res.status(404).json({err:'basket not found'})
    }
})

router.post('/save-to-basket', async (req, res, next)=> {

    const { userId, item } = req.body

    let duplicated = false;

    let basket = await Basket.findOne({userId:userId});
    console.log(basket)
    if (basket.basket.length > 0) {
        basket.basket.forEach(product=>{
            if(item._id===product._id){
                duplicated = true;
            }
        })
    }

    if ( duplicated ){
        res.send({msg: "Product already exist!!!"})
    }else{

        Basket.findOneAndUpdate({ userId: userId }, { $push: { basket : item }}).then(response=>{
            res.send({msg: "Product has been added to basket!"})
        }).catch(error=>{
            res.status(400).send({msg: error})
        })

    }



    
    // const findBasketAndUpdate = await Basket.findOneAndUpdate({ userId: userId }, { $push: { basket : item }}).then(newRecord => { // check for duplicate 

    //     // if(duplicated){ 
    //     //      res.json({error : 'product is already exist!'})
    //     // } 

    //     if(newRecord){

    //         res.json({items: newRecord.basket});

    //     }
        
    // }).catch(err => {
    //     console.log(err)
    // })




    // const handleDuplicate = await Basket.findOne({userId: userId}, { basket : { $elemMatch: {_id: item._id } } } ).then((f) => {
    //     const handleDuplicate = await Basket.findOne({userId: userId}, { basket : item } ).then((f) => {

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

        // const findBasketAndUpdate = await Basket.findOneAndUpdate({ userId: userId }, { $push: { basket : item }})
        // if(findBasketAndUpdate){
        //     res.json({items: findBasketAndUpdate.basket});
        // }
    // }
})


router.post('/remove-from-basket', async (req, res, next) => {

const { userId, item } = req.body

const removeingItem = await Basket.update({ userId : userId }, { $pull : { basket : { _id : item._id}}})
if(removeingItem){
    res.status(200).json({item: 'removed from basket'})
}

})



module.exports = router;