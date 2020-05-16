const express = require('express')
const router = express.Router()
// mongodb
const User = require('../models/User')
const Basket = require('../models/Basket')
const Favorite = require('../models/Favorite')

// mysql
// const pool = require('../mySql')
// const randomstring = require('randomstring')
// const functions = require('../functions')

router.post('/',  (req, res) => {

    const {firstName, lastName, email, userPassword, country, city, postCode, userAddress, phoneNumber, birthDate} = req.body.data
    
    User.findOne({email:email}).then(foundedUser => {
        if(foundedUser){
            res.status(404).json({errors : {registerError : ' Email is Already Exist..'}})
        }else{

            const newUser = new User({ 

                firstName : firstName,
                lastName : lastName,
                email : email,
                country : country,
                city : city,
                postCode : postCode,
                userAddress : userAddress,
                phoneNumber : phoneNumber,
                birthDate : birthDate
            })

            newUser.setPassword(userPassword)

            newUser.saveLastLoggedInDate(Date.now())

            const generatedLogin = newUser.toAuthJSON()
            newUser.saveCurrentJWTtoDB(generatedLogin.token)

            const newBasket = new Basket({
                userId : newUser._id,
                basket_owner: newUser.email
            }).save()

            const newFavorite = new Favorite({
                userId: newUser._id,
                favorite_owner: newUser.email
            }).save()

            newUser.save().then(recordSaved => {
                res.json({userRegistered : generatedLogin})

                require('../mailer').mailer({
                    email : newUser.email,
                    subject :'thank you for registering',
                    text :'please confirm now your Account ...',
                    link : '#',
                    textForLink : "still not finished ..." 
                })
            })
        }
    })



  // SQL register request

    // pool.query('SELECT * FROM `users` WHERE `email`='+pool.escape(String(req.body.data.email)), function(err, row, fields) {

    //     if(err) {

    //         return new Error(err);
    //     } else {

    //         if (row && row.length ) {

    //             res.status(404).json({errors : {registerError : ' Email is Already Exist..'}})

    //         } else {

    //             const sql = `INSERT INTO
    //             users(
    //                 userId, 
    //                 firstName, 
    //                 lastName, 
    //                 email, 
    //                 userPassword, 
    //                 country, 
    //                 city, 
    //                 postCode, 
    //                 userAddress, 
    //                 phoneNumber, 
    //                 birthDate
    //             )
    //             VALUES(

    //                 ${pool.escape(String(randomstring.generate(7)))},
    //                 ${pool.escape(String(firstName))},
    //                 ${pool.escape(String(lastName))},
    //                 ${pool.escape(String(email))},
    //                 ${pool.escape(String(functions.setPassword(userPassword)))},
    //                 ${pool.escape(String(country))}, 
    //                 ${pool.escape(String(city))}, 
    //                 ${pool.escape(String(postCode))}, 
    //                 ${pool.escape(String(userAddress))},
    //                 ${pool.escape(String(phoneNumber))}, 
    //                 ${pool.escape(String(birthDate))}
    //             );
    //             `

    //             pool.query(sql, (err, result, fields) => {
    //                 if(err) throw err

    //                 pool.query('SELECT * FROM `users` WHERE `email` =' +pool.escape(String(email)),function (err, row)  {
    //                     if (err) throw err

    //                     if(row && row.length){ 

    //                         const newBasket = new Basket({
    //                             userId : row[0].userId,
    //                             basket_owner: row[0].email
    //                         }).save()

    //                         const newFavorite = new Favorite({
    //                             userId : row[0].userId,
    //                             favorite_owner: row[0].email
    //                         }).save()

    //                         res.json({userRegistered : functions.generateJWT(row[0].userId, row[0].email)})
    //                     }
    //                 } ) 
    //             })
    //         }
    //     }
    // });








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