const express = require('express')
const router = express.Router()
const User = require('../models/User')
const Basket = require('../models/Basket')
const Favorite = require('../models/Favorite')
//const parseErrors = require('./parseErrors')

router.post('/',  (req, res) => {
    
    User.findOne({email:req.body.data.email}).then(foundedUser => {
        if(foundedUser){
            res.status(404).json({errors : {registerError : ' Email is Already Exist..'}})
        }else{

            const newUser = new User({ email : req.body.data.email })
            newUser.setPassword(req.body.data.password)
            newUser.saveLastLoggedInDate(Date.now())

            const generatedLogin = newUser.toAuthJSON()
            newUser.saveCurrentJWTtoDB(generatedLogin.token)

            const newBasket = new Basket({
                user_ID : newUser._id,
                basket_owner: newUser.email
            }).save()

            const newFavorite = new Favorite({
                user_ID: newUser._id,
                favorite_owner: newUser.email
            }).save()

            newUser.save().then(recordSaved => {
                res.json({userRegistered : generatedLogin})
            })
        }
    })





    // const user = new User( { email : req.body.data.email } )

    // user.setPassword( req.body.data.password )

    // user.save().then(( userRegistered ) => {

    //     const generatedJWT = userRegistered.toAuthJSON()
    //     userRegistered.saveCurrentJWTtoDB(generatedJWT)
    //     res.json({userRegistered: userRegistered.toAuthJSON()})

    // }).catch(err => {
    //         res.status(404).json({errors: parseErrors(err.errors)})  //??????
    // }) 
})


module.exports = router