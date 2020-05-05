const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const pool = require('../mySql')
const functions = require('../functions')

router.post('/', async (req, res) => {
    jwt.verify(req.body.data.token, process.env.JWT_SEC, ( err, decoded ) => {
        if(err){
            res.status(401).json({ resetPasswordError : { resetPasswordError : 'error while decoding the token' }})
        }else{
            pool.query('SELECT * FROM `users` WHERE `userId` =' +pool.escape(String(decoded.userId)),function (err, row)  {
                if (err) throw err
                if(row && row.length){ 

                    let sql = `UPDATE users SET 
                    userPassword = ${pool.escape(String(functions.setPassword(req.body.data.userPassword)))}  
                    WHERE userId = ${pool.escape(String(decoded.userId))}`

                    pool.query(sql, (err, result, fields) => {
                        if (err) throw err
                        if(row && row.length){ 
                            res.json({userSignedInData : functions.generateJWT(row[0].userId, row[0].email)})
                        }else{
                            res.status(404).json({ resetPasswordError : { resetPasswordError : 'error while resetting your password' }})
                        }
                    }) 
                }
            }) 
        }
    })
})
module.exports = router

