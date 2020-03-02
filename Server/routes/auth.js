const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.post('/', (req, res) => {

    console.log(req.body)
    
     User.findOne({email: req.body.data.email}).then(foundedUser => {

        if(!foundedUser){
            res.status(400).json({ globalErrors: { authError: "Server: Account not found!" }});
            
        }else{
            const generatedLogin = foundedUser.toAuthJSON()
            foundedUser.saveCurrentJWTtoDB(generatedLogin.token)
            foundedUser.saveLastLoggedInDate(Date.now())
            foundedUser.save().then(recordSaved => {

                res.status(200).json({ userSignedInData: generatedLogin})
            })

        }
    })
})
module.exports = router
