// const express = require('express')
// const router = express.Router()
// const User = require('../models/User')

// router.post('/', async (req, res) => {
    
//    const user = await User.findOne({loggedinToken: req.body.token})

//         if(user){

//             user.saveLastLoggedOutDate(Date.now())

//             user.save().then(() => {
//                 res.status(200).json({ userLoggedOut:'userLoggedOut'})
//             })

//         }else{
//             res.status(400).json({ userLoggedOut:'userLoggedOut failed'});

//         }


// })
// module.exports = router
