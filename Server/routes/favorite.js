const express = require('express');
const router = express.Router();
const Favorite = require('../models/Favorite');


router.post('/get-favorite', async (req, res, next) => { 
    const { userID } = req.body

    const findInFavorite = await Favorite.findOne({user_ID: userID})
        if(findInFavorite){

            res.json({favorite: findInFavorite.favorite});
        }else{
            res.status(404).json({err:'favorite not found'})
        }
})

router.post('/save-to-favorite', async (req, res, next)=> {

    const { userID, item } = req.body

    const findFavoriteAndUpdate = await Favorite.findOneAndUpdate({ user_ID: userID }, { $push: { favorite : item }})

        if(findFavoriteAndUpdate){
            res.json({items: findFavoriteAndUpdate.favorite});
        }else{
            res.status(404).json({err:'favorite not found'})
        }
})




module.exports = router;