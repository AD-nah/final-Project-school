const express = require('express')
const router = express.Router()
// const User = require('../models/User')
// const Basket = require('../models/Basket')
// const Favorite = require('../models/Favorite')
//const parseErrors = require('./parseErrors')
const pool = require('../mySql')
const randomstring = require('randomstring')
const functions = require('../functions')

router.post('/',  (req, res) => {

    const {firstName, lastName, email, userPassword, country, city, postCode, userAddress, phoneNumber, birthDate} = req.body.data

    pool.query('SELECT * FROM `Users` WHERE `email`='+pool.escape(String(req.body.data.email)), function(err, row, fields) {

        if(err) {

            return new Error(err);
        } else {

            if (row && row.length ) {

                res.status(404).json({errors : {registerError : ' Email is Already Exist..'}})

            } else {

                const sql = `INSERT INTO
                Users(
                    userId, 
                    firstName, 
                    lastName, 
                    email, 
                    userPassword, 
                    country, 
                    city, 
                    postCode, 
                    userAddress, 
                    phoneNumber, 
                    birthDate
                )
                VALUES(

                    ${pool.escape(String(randomstring.generate(7)))},
                    ${pool.escape(String(firstName))},
                    ${pool.escape(String(lastName))},
                    ${pool.escape(String(email))},
                    ${pool.escape(String(functions.setPassword(userPassword)))},
                    ${pool.escape(String(country))}, 
                    ${pool.escape(String(city))}, 
                    ${pool.escape(String(postCode))}, 
                    ${pool.escape(String(userAddress))},
                    ${pool.escape(String(phoneNumber))}, 
                    ${pool.escape(String(birthDate))}
                );
                `
                pool.query(sql, (err, result, fields) => {
                    if(err) throw err

                    pool.query('SELECT * FROM `Users` WHERE `email` =' +pool.escape(String(email)),function (err, row)  {
                        if (err) throw err

                        if(row && row.length){ 
                            
                            const sql = `


                              INSERT INTO Basket (
                                User_Id
                              ) 


                            `
                            // pool.query()

                            res.json({userRegistered : functions.toAuthJSON(row[0].User_Id, row[0].email)})
                        }
                    } ) 
                })
            }
        }
    });



    // User.findOne({email:req.body.data.email}).then(foundedUser => {
    //     if(foundedUser){
    //         res.status(404).json({errors : {registerError : ' Email is Already Exist..'}})
    //     }else{

    //         const newUser = new User({ email : req.body.data.email })

    //         newUser.setPassword(req.body.data.password)

    //         newUser.saveLastLoggedInDate(Date.now())

    //         const generatedLogin = newUser.toAuthJSON()
    //         newUser.saveCurrentJWTtoDB(generatedLogin.token)

    //         const newBasket = new Basket({
    //             user_ID : newUser._id,
    //             basket_owner: newUser.email
    //         }).save()

    //         const newFavorite = new Favorite({
    //             user_ID: newUser._id,
    //             favorite_owner: newUser.email
    //         }).save()

    //         newUser.save().then(recordSaved => {
    //             res.json({userRegistered : generatedLogin})
    //         })
    //     }
    // })





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