var express = require("express");
var router = express.Router();
const Basket = require("../models/Basket");
//paypal's payment authentication
let paypal = require("paypal-rest-sdk");

//my buyer Paypal-sandbox email and password:
//sb-eq8tx1268846@business.example.com
//12345678

paypal.configure({
  mode: "sandbox", //sandbox(testing account on paypal developer) or live (real payment to the seller)
  client_id:
    "AVopnsZP624OSgBf_o_w4L2ceuqiSIivm-Da615mL9oAM7XKi1CzT0U9AJw3tVBAJCcH8zOjXkKup9dg",
  client_secret:
    "EP3pTHIQQf4tEsTVDIOb2SBy-nxriy2vkG8DOfbYowP_9r_Sb3rRSpOw7Xd_Qvez8SCfxywm0e4NzYyp",
});

//start payment process by adding to PAY btn inside basket /BUY redirection to get the  authenticate from server.get
router.get("/buy", async (req, res) => {
  let userId = req.query.id;
  const findInBasket = await Basket.findOne({ userId: userId });
  console.log(userId);
  //Here you get the basket information from data base

  var payment = {
    intent: "authorize",
    payer: {
      payment_method: "paypal",
    },
    redirect_urls: {
      return_url: "http://127.0.0.1:3000/success",
      cancel_url: "http://127.0.0.1:3000/err",
    },
    transactions: [
      {
        amount: {
          total: 39.0,
          currency: "USD",
        },
        description: " a book on mean stack ",
      },
    ],
  };
  createPay(payment)
    .then((transaction) => {
      let id = transaction.id;
      let links = transaction.links;
      let counter = links.length;
      while (counter--) {
        if (links[counter].method == "REDIRECT") {
          return res.redirect(links[counter].href);
        }
      }
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/err");
    });
});

//in case of the success payment redirect me to this success message
router.get("/success", (req, res) => {
  console.log(req.query);
  res.redirect("/success.html");
});
router.get("/err", (req, res) => {
  console.log(req.query);
  res.redirect("/err.html");
});

// helper functions to paypal methode
let createPay = (payment) => {
  return new Promise((resolve, reject) => {
    paypal.payment.create(payment, function (err, payment) {
      if (err) {
        reject(err);
      } else {
        resolve(payment);
      }
    });
  });
};

module.exports = router;
