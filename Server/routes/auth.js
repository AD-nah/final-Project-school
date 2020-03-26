const express = require('express')
const router = express.Router()
// const User = require('../models/User')
const pool = require('../mySql')
const functions = require('../functions')

router.post('/', (req, res) => {
    const {email, userPassword} = req.body.data
    pool.query('SELECT * FROM `users` WHERE `email` =' +pool.escape(String(email)),function (err, row)  {
        if (err) throw err
    
        if(row && row.length){ 

            if(functions.isValidPassword(row[0].userPassword, userPassword)){

                res.status(200).json({ userSignedInData: functions.generateJWT(row[0].userId, row[0].email)})
            }else{
                res.status(400).json({ globalErrors: { authError: "Password is Incorrect!" }});
            }

        }else{
            res.status(400).json({ globalErrors: { authError: "Account not found" }});
        }
    } )
})


    //  User.findOne({email: req.body.data.email}).then(foundedUser => {

    //     if(!foundedUser){
    //         res.status(400).json({ globalErrors: { authError: "Account not found" }});
            
    //     }else{
            
    //         if(foundedUser.isValidPassword(req.body.data.password)){

    //             const generatedLogin = foundedUser.toAuthJSON()
    //             foundedUser.saveCurrentJWTtoDB(generatedLogin.token)
    //             foundedUser.saveLastLoggedInDate(Date.now())
    //             foundedUser.save().then(recordSaved => {

    //                 console.log(foundedUser._id)

    //                 res.status(200).json({ userSignedInData: generatedLogin})
    //             })

    //         }else{
    //             res.status(400).json({ globalErrors: { authError: "Password is Incurrect!" }});
    //         }
    //     }
    // })
module.exports = router
