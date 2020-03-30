const express = require('express')
const router = express.Router()
const pool = require('../mySql')


router.post('/', async (req, res) => {

    const {email} = req.body.data


    pool.query('SELECT * FROM `users` WHERE `email` =' +pool.escape(String(email)),function (err, row)  {
         if (err) throw err
     
         if(row && row.length){ 

             require('../mailer').mailer({
                email : row[0].email,
                subject :'Reset you Password',
                text :'please clich on the link to reset your password',
                link :' user.generateResetPasswordUrl()' ,
                textForLink : 'click here to to confirm  your Account'
            })
            res.json({})


         }else{
            res.status(400).json({emailNotFoundError :{ notFound: 'Email not found'}})
        }
     } )
})

module.exports = router
