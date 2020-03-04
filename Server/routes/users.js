var express = require('express');
var router = express.Router();
const Product = require('../models/Product')
const male =  '5e5d1d5a03249d2ee09ce758'
const female = '5e5d1d8303249d2ee09ce759'


const womens =  [

  {
      "name":"Lang Brautjungfernkleid Party",
      "description":"Frauen Damen Chiffon Brautjungfer Kleid.Gefaltete Material am Oberteil, innen mit Silikonband zum Aufbewahren",
      "images": [
        "https://i.ebayimg.com/images/g/Mw0AAOSw~QVd-cXP/s-l1600.jpg",
        "https://i.ebayimg.com/images/g/agwAAOSwjhJd-cXP/s-l1600.jpg",

        "https://i.ebayimg.com/images/g/Fj8AAOSwPbdd-cWt/s-l1600.jpg",
        "https://i.ebayimg.com/images/g/pVsAAOSw48Zd-cXP/s-l1600.jpg"
      ],
      "prices":[
        20,
        40
      ],
      "rating" : 4
    },
  {
      "name":"Übergröße Damen Partykleid",
      "description":"Übergröße Damen Partykleid Abendkleid Cocktailkleid Clubwear 3/4 Ärmel Kleider",
      "images": [
        "https://i.ebayimg.com/images/g/Lp0AAOSwFChdsg4F/s-l1600.jpg",
        "https://i.ebayimg.com/images/g/VNcAAOSwOb9dsg4A/s-l1600.jpg",

      ],
      "prices":[
        20,
        40
      ],
      "rating" : 3
    },    {
      "name":"NWT Nike Sport Casual",
      "description":" Women's Pullover Lightweight Hoodie, Blue, Small, Soft!",
      "images": [
        "https://i.ebayimg.com/images/g/DcgAAOSwzQ9dsg4K/s-l1600.jpg",
        "https://i.ebayimg.com/images/g/q68AAOSwx1Rdsg4K/s-l1600.jpg",
      ],
      "prices":[
        20,
        40
      ],
      "rating" : 5
    },
  {
      "name":"Karen Scott Sport ",
      "description":"Karen Scott Sport Womens Black Fitness Sweatshirt Athletic Plus 2X BHFO 0276",
      "images": [
        "https://i.ebayimg.com/images/g/EyoAAOSwn5Jdsg4I/s-l1600.jpg",
        "https://i.ebayimg.com/images/g/FoIAAOSwUCFdsg4G/s-l1600.jpg",

  
      ],
      "prices":[
        20,
        40
      ],
      "rating" : 3
    },

  {
      "name":"Karen Scott Sport Red ",
      "description":"Karen Scott Sports Womens Red Fitness Workout Cardigan Athletic XL BHFO 2656",
      "images": [
        "https://i.ebayimg.com/images/g/lLcAAOSwjydeHg5S/s-l500.jpg",
        "https://i.ebayimg.com/images/g/IF0AAOSwz5peHg5R/s-l500.jpg",
        
        "https://i.ebayimg.com/images/g/b1sAAOSwZQ9eHg5P/s-l500.jpg",
        "https://i.ebayimg.com/images/g/KSYAAOSwZzVeHg5O/s-l500.jpg"
      ],
      "prices":[
        20,
        40
      ],
      "rating" : 3
    },

  {
      "name":"Calvin Klein ",
      "description":"Performance Womens Gray Jogger Pants Athletic Plus 2X BHFO 9810",
      "images": [
        "https://i.ebayimg.com/images/g/BCsAAOSwy1VeCrto/s-l1600.jpg",
        "https://i.ebayimg.com/images/g/BCsAAOSwy1VeCrto/s-l1600.jpg",

        "https://i.ebayimg.com/images/g/BCsAAOSwy1VeCrto/s-l1600.jpg",
      ],
      "prices":[
        20,
        40
      ],
      "rating" : 4
    },

  {
      "name":"Brand new: lowest price",
      "description":"A little embroidery goes a long way on Tory Burch Jayda T-Shirt. It’s easy to wear and makes a polished addition to your basics wardrobe. Style # 34073 0117. 63 cm / Sleeve",
      "images": [
        "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/499e46456dd74063a872aa100132978b_9366/ED8169_000_plp_model.jpg",
        "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/5238cc8a2a024168bce0aa10012d515d_9366/ED8169_22_model.jpg",

        "https://i.ebayimg.com/images/g/6gQAAOSwTRZeH0qm/s-l1600.jpg",
        "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/1539a96c60514e178e66aa10016d70ac_9366/FI3173_22_model.jpg"
      ],
      "prices":[
        20,
        40
      ],
      "rating" : 5
    },

  {
      "name":"Brand new: lowest price",
      "description":"Fabric: Poplin. Crochet and fringe at cuffs. Shell: 100% cotton. Tied bows on sleeves. Long sleeves",
      "images": [
        "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/37f2a4f29a0747308b81a9f2018a1c2b_9366/FI3173_01_laydown.jpg",
        "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/4617ae578acb4997b88ba9f2018af7c5_9366/FI3173_02_laydown.jpg",

        "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/7e4161fc96da477fa34eaa1001689433_9366/FI3173_000_plp_model.jpg",
        "https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/f68f36d998da45f7b9ffaa10016c3bf1_9366/FI3173_25_model.jpg"
      ],
      "prices":[
        20,
        40
      ],
      "rating" : 5
    },

  {
      "name":"ew $348 TORY BURCH ",
      "description":"new without tagdesigner tag and size tag removedapprox. size M, Hayden Floral Tie Neck Top Daisy Size M NWOT",
      "images": [
        "https://i.ebayimg.com/images/g/hBQAAOSwed9d9cMu/s-l1600.jpg",
        "https://i.ebayimg.com/images/g/Y1cAAOSw0dZd9cMv/s-l1600.jpg",

        "https://i.ebayimg.com/images/g/TacAAOSwhYNd9brb/s-l1600.jpg",
        "https://i.ebayimg.com/images/g/uBsAAOSwSeVd9cFG/s-l1600.jpg"
      ],
      "prices":[
        20,
        40
      ],
      "rating" : 2
    }
]




const mens = [{

      "name":"Tommy Hilfiger Men's Jacket",
      "description":"WATERSTOP WATER RESISTANT. YACHT WINDBREAKER JACKET. EMBROIDERED FLAG & HILFIGER ON LEFT CHEST. PRINTED 'HILFIGER' ON BACK COLLAR. This jacket is",
      "images": [
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F112730796904110050%2F&psig=AOvVaw0cFCsuUeYExCt3EHcd_1Bn&ust=1583328449442000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMjk88y0_ucCFQAAAAAdAAAAABAD",
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F818107088533347652%2F&psig=AOvVaw0cFCsuUeYExCt3EHcd_1Bn&ust=1583328449442000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMjk88y0_ucCFQAAAAAdAAAAABAI",

        "https://i.pinimg.com/originals/7d/f5/de/7df5de5de8a917467c30e96e515ba985.jpg",
      ],
      "prices":[
        20,
        40
      ],
      "rating" : 2
    },
  {
      "name":"TOMMY HILFIGER ",
      "description":"For Men's Down Quilted Packable Jacket - Grey - Medium",
      "images": [
        "https://www.telegraph.co.uk/content/dam/luxury/2018/06/26/166262093_Getty-Images-Europe_Street-Style-June-13-94-Pitti-Uomo_trans_NvBQzQNjv4BqLKu6cr0KxbAw8g3pgyZWCW0ZpWw4b48YtDMAWh4PPaE.jpg?imwidth=450",
        "https://i.pinimg.com/originals/f1/99/26/f1992699f4c308d474e4a94f0044d1db.jpg",
      ],
      "prices":[
        20,
        40
      ],
      "rating" : 4
    },
  {
      "name":"Lacoste Mens Blue",
      "description":"Keep your cool-weather look classic and comfortable with the soft cotton and iconic embroidered croc logo of this regular fit sweater from Lacoste. Regular fit. Machine ",
      "images": [
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F435582595208227753%2F&psig=AOvVaw0cFCsuUeYExCt3EHcd_1Bn&ust=1583328449442000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMjk88y0_ucCFQAAAAAdAAAAABBO",
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fmensfashiontoda&psig=AOvVaw0cFCsuUeYExCt3EHcd_1Bn&ust=1583328449442000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMjk88y0_ucCFQAAAAAdAAAAABBl",

      ],
      "prices":[
        20,
        40
      ],
      "rating" : 3
    },
  {
      "name":"Hugo Boss Jacket",
      "description":"Blue Slim Fit Wool Linen-Blend Blazer Jacket Size S 38 R 48",
      "images": [
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aliexpress.com%2Fi%2F4000445595382.html&psig=AOvVaw0cFCsuUeYExCt3EHcd_1Bn&ust=1583328449442000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMjk88y0_ucCFQAAAAAdAAAAABB8",
        "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2019%2F06%2Fhermes-paris-fashion-week-mens-spring-summer-2020-runway-collection-look-5.jpg?q=75&w=800&cbr=1&fit=max",
      ],
      "prices":[
        20,
        40
      ],
      "rating" : 4
    },
  {
      "name":"Jack and Jonest",
      "description":"Jack and Jones Brand New JacketsMen’s Puffer Jacket For ColdWeather,Spring Summer WindLightweight and Comfortable wear for Every Day",
      "images": [
        "https://cdn03.plentymarkets.com/9xi0ypdttb8m/item/images/1747/full/Tee-Jays-Mens-Fashion-V-Neck-Sof-Tee-8006.jpg",
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nawajo.de%2Ftee-jays-sof-tee-8000%2Fherren%2Ft-shirts%2Fkurzarm_1745_2632&psig=AOvVaw0cFCsuUeYExCt3EHcd_1Bn&ust=1583328449442000&source=images&cd=vfe&ved=0CAIQjRxqGAoTCMjk88y0_ucCFQAAAAAdAAAAABCaAQ",

        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vivo-shop.com%2FTeeJays-8000-Sof-Tee&psig=AOvVaw0cFCsuUeYExCt3EHcd_1Bn&ust=1583328449442000&source=images&cd=vfe&ved=0CAIQjRxqGAoTCMjk88y0_ucCFQAAAAAdAAAAABCeAQ",
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.openwear.pl%2Fkoszulka-meska-fashion-sof-tee-tee-jays-8005%2Cp-86772.html&psig=AOvVaw0cFCsuUeYExCt3EHcd_1Bn&ust=1583328449442000&source=images&cd=vfe&ved=0CAIQjRxqGAoTCMjk88y0_ucCFQAAAAAdAAAAABCjAQ"
      ],
      "prices":[
        20,
        40
      ],
      "rating" : 2
    }
]


  // mens.forEach((item => {

  //   const newProduce = new Product({

  //     product_type: male,

  //     name: item.name,

  //     description: item.description,

  //     images: item.images,

  //     prices: item.prices,

  //     rating: item.rating
  //   })

  //   newProduce.save()

  // }))

  
module.exports = router;


