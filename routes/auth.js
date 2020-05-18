const express = require("express");
const router = express.Router();
const User = require("../models/User");
// const pool = require('../mySql')
// const functions = require('../functions')

router.post("/", (req, res) => {
  const { email, userPassword } = req.body.data;

  User.findOne({ email: email }).then((foundedUser) => {
    if (!foundedUser) {
      res
        .status(400)
        .json({ globalErrors: { authError: "Account not found" } });
    } else {
      if (foundedUser.isValidPassword(userPassword)) {
        const generatedLogin = foundedUser.toAuthJSON();
        foundedUser.saveCurrentJWTtoDB(generatedLogin.token);
        foundedUser.saveLastLoggedInDate(Date.now());
        foundedUser.save().then((recordSaved) => {
          // console.log(foundedUser._id)

          res.status(200).json({ userSignedInData: generatedLogin });
        });
      } else {
        res
          .status(400)
          .json({ globalErrors: { authError: "Password is Incurrect!" } });
      }
    }
  });

});

router.post("/getUserData", async (req, res) => {
  const { userId } = req.body;

  const user = await User.findOne({ _id: userId });

  if (user) {
    res.json({ userData: user });
  } else {
    res.status(404).json({ message: "user not found" });
  }
});

router.post("/saveUserData", async (req, res) => {
  const { userId, data } = req.body;
  User.findByIdAndUpdate(userId, data, function (err, result) {
    if (err) {
      res.status(404).json({ errors: "user not found" });
    } else {
      res.json({ message: "successfuly changed" });
    }
  });
});


  // SQL login request

  // pool.query('SELECT * FROM `users` WHERE `email` =' +pool.escape(String(email)),function (err, row)  {
  //     if (err) throw err

  //     if(row && row.length){

  //         if(functions.isValidPassword(row[0].userPassword, userPassword)){

  //             res.status(200).json({ userSignedInData: functions.generateJWT(row[0].userId, row[0].email)})
  //         }else{
  //             res.status(400).json({ globalErrors: { authError: "Password is Incorrect!" }});
  //         }

  //     }else{
  //         res.status(400).json({ globalErrors: { authError: "Account not found" }});
  //     }
  // } )
module.exports = router;
