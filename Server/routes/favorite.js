const express = require('express');
const router = express.Router();
const Favorite = require('../models/Favorite');


router.post('/get-favorite', async (req, res, next) => { 
    const { userId } = req.body;

    const findInFavorite = await Favorite.findOne({userId: userId});
        if(findInFavorite){

            res.json({favorite: findInFavorite.favorite});
        }else{
            res.status(404).json({err:'favorite not found'});
        }
})

router.post('/save-to-favorite', async (req, res, next)=> {

    const { userId, item } = req.body;

    const findFavoriteAndUpdate = await Favorite.findOneAndUpdate({ userId: userId }, { $push: { favorite : item }})

    if(findFavoriteAndUpdate){
        res.json({items: findFavoriteAndUpdate.favorite});
    }else{
        res.status(404).json({err:'favorite not found'});
    }
})
router.post('/remove-from-favorite', async (req, res, next) => {

    const { userId, item } = req.body

    const removeingItem = await Favorite.update({ userId : userId }, { $pull : { favorite : { _id : item._id}}})
    if(removeingItem){
        res.status(200).json({item: 'removed from favorite'})
    }

})





module.exports = router;