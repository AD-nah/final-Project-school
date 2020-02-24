var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {

console.log(req.body)
    //res.status(200).json({ userSignedInData: foundedUser.toAuthJSON()})

    res.status(400).json({ globalErrors: { authError: "Server: Account not found!" }});


});

module.exports = router;
