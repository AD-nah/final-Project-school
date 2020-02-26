const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.post('/', (req, res) => {

    console.log(req.body)
    
    User.findOne({email: req.body.userSignInData.email}).then(foundedUser => {

        if(foundedUser && foundedUser.isValidPassword(req.body.userSignInData.password)){

            console.log('SERVER: ', req.body.userSignInData.email, 'logged in')

            res.status(200).json({ userSignedInData: foundedUser.toAuthJSON()})

        }else{

            res.status(400).json({ globalErrors: { authError: "Server: Account not found!" }});
        }
    }).catch((err)=>{
        console.log('hi',err);
    })

    //res.status(400).json({ globalErrors : { authError: 'Account not found!' }});
    //res.status(200).json({ userSignedInData : {email:'dsfdsf', token:'fsf'}})

})
module.exports = router
