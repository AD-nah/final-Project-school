const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

router.post('/', async (req, res) => {

    jwt.verify(req.body.token,

    process.env.JWT_SEC,
    ( err, decoded ) => {

        if(err){
            res.status(401).json({ invalidToken : { invalidToken : 'invalid Token' }})
        }else{
            res.json({})
        }
    })
})

module.exports = router