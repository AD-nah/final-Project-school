const express = require("express");
const router = express.Router();
const pool = require("../mySql");
const functions = require("../functions");
const User = require("../models/User");

router.post("/", async (req, res) => {
  const { email } = req.body.data;
  User.findOne({ email: email }).then((foundedUser) => {
    if (!foundedUser) {
      res
        .status(400)
        .json({ emailNotFoundError: { notFound: "Email not found!" } });
    } else {
      require("../mailer").mailer({
        email: foundedUser.email,
        subject: "Reset you Password",
        text: "please click on the link to reset your password",
        link: functions.generateResetPasswordUrl(foundedUser._id),
        textForLink: "click here to to reset your Password",
      });
      res.json({});
    }
  });



  
  // pool.query('SELECT * FROM `users` WHERE `email` =' +pool.escape(String(email)),function (err, row)  {
  //      if (err) throw err

  //      if(row && row.length){

  //  require('../mailer').mailer({
  //     email : row[0].email,
  //     subject :'Reset you Password',
  //     text :'please click on the link to reset your password',
  //     link : functions.generateResetPasswordUrl(row[0].userId),
  //     textForLink : 'click here to to reset your Password'
  // })
  // res.json({})

  //      }else{
  //         res.status(400).json({emailNotFoundError :{ notFound: 'Email not found'}})
  //     }
  //  } )
});

module.exports = router;
