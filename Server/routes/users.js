var express = require('express');
var router = express.Router();
const Product = require('../models/Product');
const male =  '5e5d1d5a03249d2ee09ce758';
const female = '5e5d1d8303249d2ee09ce759';
const pool = require('../mySql')

// womens.forEach( (async item => {

//    const newProduce = await new Product({

//     product_type: female,

//     name: item.name,
//     description: item.description,

//     images: item.images,
//     prices: item.prices,
//     rating: item.rating,
//     colors:item.colors,
//     sizes:item.sizes
//   })

//   newProduce.save()

// }))

// men.forEach( (async item => {

//   const newProduce = await new Product({

//    product_type: male,

//    name: item.name,
//    description: item.description,

//    images: item.images,
//    prices: item.prices,
//    rating: item.rating,
//    sizes:item.sizes
//  })

//  newProduce.save()

// }))







let womens = [
  {
    "name": "Boxystyle Strickpullover",
    "description": "Wolle von  Merkmale: gerader Schnitt, Reißverschluss an der Vorderseite, gerippter Kragen, gerippte Abschlüsse, seitliche Taschen und Futter.",

    "images": {
      "protoTypes": [
        "https://www.ilovetall.com/media/image/ac/e7/48/I-LOVE-TALL-Boxystyle-Strickpullover-extra-lang-schwarz.jpg",
        "https://www.ilovetall.com/media/image/e2/70/2c/I-LOVE-TALL-Feinstrickpullover-gerippt-in-Langgro-sse-marine.jpg",
        "https://www.ilovetall.com/media/image/f0/34/1f/ilt_0168.jpg"
      ],
      "colors":{
        "black": "https://www.ilovetall.com/media/image/ac/e7/48/I-LOVE-TALL-Boxystyle-Strickpullover-extra-lang-schwarz.jpg",
        "blue": "https://www.ilovetall.com/media/image/e2/70/2c/I-LOVE-TALL-Feinstrickpullover-gerippt-in-Langgro-sse-marine.jpg",
        "red": "https://www.ilovetall.com/media/image/f0/34/1f/ilt_0168.jpg"
      },
    },

    "prices": [
      34,
      15
    ],
    "rating": 5,

    "colors": [
      "black",
      "blue",
      "red"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },

  {
    "name": "MessBebe Women's Oversized Knitted Jumper",
    "description": "Glittering: MessBebe long-sleeved, crew neck jumper in a glitter look, designed with deep shoulder seams, ribbed details and a straight hem.",

    "images": {
      "protoTypes": [
        "https://images-na.ssl-images-amazon.com/images/I/81QLduEzYKL._AC_SY879._SX._UX._SY._UY_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/81Ae28wcyJL._AC_SY879._SX._UX._SY._UY_.jpg",
       "https://images-na.ssl-images-amazon.com/images/I/81GnYenn8pL._AC_UY879_.jpg",
      ],
      "colors":{
        "black": "https://images-na.ssl-images-amazon.com/images/I/91TAvadKWkL._AC_SY879._SX._UX._SY._UY_.jpg",//
        "grey": "https://images-na.ssl-images-amazon.com/images/I/81gr4S%2B5WkL._AC_SY879._SX._UX._SY._UY_.jpg",
        "red": "https://images-na.ssl-images-amazon.com/images/I/91BlbSm8j7L._AC_UY879_.jpg", //
        "yellow" : "https://images-na.ssl-images-amazon.com/images/I/81GdNIwMpFL._AC_SY879._SX._UX._SY._UY_.jpg"
      },
    },

    "prices": [
      15,
      6
    ],
    "rating": 5,

    "colors": [
      "black",
      "grey",
      "red",
      "yellow"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },

  
/// below is Not finsh

  {
    "name": "Onlcaviar L/S KNT Women's Pullover",
    "description": "Product description Only fashionable knitted jumper with crew neck, raglan sleeves and rounded hem; material: 100% polyacrylic.",

    "images": {
      "protoTypes": [
        "https://images-na.ssl-images-amazon.com/images/I/91F-%2BYqmv%2BL._AC_SY606._SX._UX._SY._UY_.jpg",// white
        "https://images-na.ssl-images-amazon.com/images/I/81EjND44PHL._AC_SX466._SX._UX._SY._UY_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/91-5IZG8CzL._AC_UX466_.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/A1RzMuQUL1L._AC_SX466._SX._UX._SY._UY_.jpg"
      ],
      "colors":{
        "White": "https://images-na.ssl-images-amazon.com/images/I/91a7%2BwxUqmL._AC_SX466._SX._UX._SY._UY_.jpg",//
        "black" : "https://images-na.ssl-images-amazon.com/images/I/81iDWhQYl%2BL._AC_SX466._SX._UX._SY._UY_.jpg",
        "green" : "https://images-na.ssl-images-amazon.com/images/I/91eOtU5DeiL._AC_UX466_.jpg",
        "red": "https://images-na.ssl-images-amazon.com/images/I/A1ufXLHE60L._AC_SX466._SX._UX._SY._UY_.jpg"
      },
    },

    "prices": [
      17,
      10
    ],
    "rating": 3,

    "colors": [
      "White",
      "black",
      "green",
      "red"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },



  {
    "name": "Onlmila Lacy L/S KNT Noos Pullover",
    "description": "entspanntes Outfit, dass immer passt, braucht nicht viel. Mit diesem schlichten Strickpullover von ONLY lassen sich im Handumdrehen unzählige tolle Outfits kreieren. Zu einer Jeans, einem süßen oder coolen Rock ",

    "images": {
      "protoTypes": [
      "https://images-na.ssl-images-amazon.com/images/I/813yIqF1wmL._AC_UX466_.jpg" ,// red
      "https://images-na.ssl-images-amazon.com/images/I/81oDlGyaGOL._AC_SX466._SX._UX._SY._UY_.jpg", //
      "https://images-na.ssl-images-amazon.com/images/I/81m8x-19LuL._AC_SX466._SX._UX._SY._UY_.jpg", // black
      "https://images-na.ssl-images-amazon.com/images/I/81884ZRtz7L._AC_UX466_.jpg" // blue
      ],
      "colors":{
        "red": "https://images-na.ssl-images-amazon.com/images/I/71z0%2Bbp5MnL._AC_UX466_.jpg",//red
        "white" : "https://images-na.ssl-images-amazon.com/images/I/81ElEaK6qgL._AC_SX466._SX._UX._SY._UY_.jpg", // white
        "black" :"https://images-na.ssl-images-amazon.com/images/I/712ZQOC9fAL._AC_SX466._SX._UX._SY._UY_.jpg", // black
        "blue" : "https://images-na.ssl-images-amazon.com/images/I/81rn7k92sVL._AC_UX466_.jpg"
      },
    },

    "prices": [
      21,
      15
    ],
    "rating": 3,

    "colors": [
      "red",
      "white",
      "black",
      "blue"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },



  {
    "name": "Only Women's Onlsaga Faux Leather Jacket CC OTW Jacket",
    "description": "Hingucker. Die super lässige Kunstlederjacke von ONLY ist genau das Richtige für jeden Anlass. Die trendige Jacke in Wildlederoptik überzeugt durch coole Ziernähte und Metallic-Reißverschlüsse an den Ärmeln. ",

    "images": {
      "protoTypes": [
      "https://images-na.ssl-images-amazon.com/images/I/91AUkKEowJL._AC_UX466_.jpg", // Gray
      "https://images-na.ssl-images-amazon.com/images/I/81MW023wyfL._AC_SX466._SX._UX._SY._UY_.jpg", //red
      "https://images-na.ssl-images-amazon.com/images/I/81lo%2BCpTzOL._AC_SX466._SX._UX._SY._UY_.jpg", // black
      ],
      "colors":{
        "grey":"https://images-na.ssl-images-amazon.com/images/I/91yzX%2BXDNuL._AC_UX466_.jpg",
        "red" :"https://images-na.ssl-images-amazon.com/images/I/81G3-0jTPjL._AC_SX466._SX._UX._SY._UY_.jpg",
        "black" : "https://images-na.ssl-images-amazon.com/images/I/81SpndXKmPL._AC_SX466._SX._UX._SY._UY_.jpg"
      },
    },

    "prices": [
      39,
      22
    ],
    "rating": 3,

    "colors": [
      "gray",
      "red",
      "black"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },


  {
    "name": "Onlmila Lacy L/S KNT Noos Pullover",
    "description": "Only long cardigan made of soft knit with loose, comfortable fit; 2 side pockets; length: 77 cm (size M); material: 100 % polyacrylic.",

    "images": {
      "protoTypes": [
        "https://images-na.ssl-images-amazon.com/images/I/81rnSyU0BsL._AC_UY879_.jpg", // jact black and White
        "https://images-na.ssl-images-amazon.com/images/I/6141grKnhvL._AC_UY879_.jpg", // jacket gray
        "https://images-na.ssl-images-amazon.com/images/I/81s3BjWnnPL._AC_UY879_.jpg" //jacket green       
      ],
      "colors":{
        "balck" : "https://images-na.ssl-images-amazon.com/images/I/81vM5QbEejL._AC_UY879_.jpg",
        "gray" : "https://images-na.ssl-images-amazon.com/images/I/61R4DnoAcXL._AC_UY879_.jpg",
        "green" : "https://images-na.ssl-images-amazon.com/images/I/81s3BjWnnPL._AC_UY879_.jpg"
      },
    },

    "prices": [
      23,
      14
    ],
    "rating": 3,

    "colors": [
      "black",
      "gray",
      "green"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },


  {
    "name": "The North Face Quest Women's Thermal Jacket",
    "description": "perfect companion for the spring and summer. The cotton outer fabric is sporty, the minimalist design with large hood adds a feminine touch.",

    "images": {
      "protoTypes": [
       "https://images-na.ssl-images-amazon.com/images/I/8112RZuCmbL._AC_SY879_.jpg", // orang jacke
       "https://images-na.ssl-images-amazon.com/images/I/81AIisJC3uL._AC_UY879_.jpg" , // blue jacket
       "https://images-na.ssl-images-amazon.com/images/I/816DHEMXfUL._AC_SY879._SX._UX._SY._UY_.jpg", // red jacke
      ],
      "colors":{
        "orang" : "https://images-na.ssl-images-amazon.com/images/I/81LFVSFin8L._AC_SY879_.jpg",
        "blue" : "https://images-na.ssl-images-amazon.com/images/I/813LA2PiYJL._AC_UY879_.jpg",
        "red" : "https://images-na.ssl-images-amazon.com/images/I/81758HPyoWL._AC_SY879._SX._UX._SY._UY_.jpg"
      },
    },

    "prices": [
      122,
      70
    ],
    "rating": 3,

    "colors": [
      "orange",
      "blue",
      "red"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },

  {
    "name": "Only Onlmandy Sedona Women's Spring Jacket OTW",
    "description": "Only Women's Cropped Coat. This short coat is the perfect companion for the spring and summer. The cotton outer fabric is sporty, the minimalist design with large hood adds a feminine touch.",

    "images": {
      "protoTypes": [
      "https://images-na.ssl-images-amazon.com/images/I/81vmDXmLQ8L._AC_UY879_.jpg", // ROSA
      "https://images-na.ssl-images-amazon.com/images/I/61q3sEeo1bL._AC_UX679_.jpg", // black
      "https://images-na.ssl-images-amazon.com/images/I/81VL4zX3OOL._AC_UY879_.jpg"



       
      ],
      "colors":{
        "rosa" : "https://images-na.ssl-images-amazon.com/images/I/81zqwD5IIJL._AC_UY879_.jpg",
        "black"  : "https://images-na.ssl-images-amazon.com/images/I/61%2Bh-ENk29L._AC_UY879_.jpg",
        "gray" : "https://images-na.ssl-images-amazon.com/images/I/81O7hM9peKL._AC_UY879_.jpg"

      },

    
      
    },

    "prices": [
      59,
      99
      
    ],
    "rating": 3,

    "colors": [
      "rosa",
      "black",
      "gray"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },
]
















const men = [

  {
    "name": "SHEIN Männer Hose Mit Schrägen Taschen Und Karo Muster",
    "description": "Taillenumfang : 92 cm,  Hüftenumfang : 108 cm,  Länge : 99.5 cm,  Schenkelumfang : 66.5 cm.",
    "images": {
      "protoTypes":[
        "https://img.ltwebstatic.com/images3_pi/2019/11/21/157432915526ccd09cec2d66d3d20bec52cfe42776_thumbnail_600x.webp",
        "https://img.ltwebstatic.com/images3_pi/2019/11/21/15743291481861493d411c0c16af2c16f3ae421203_thumbnail_600x.webp"

      ],

    },
    "prices": [
      17,
      10,
      
    ],
    "rating": 3,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },


  {
    "name": "SHEIN Männer Blazer Mit Eingekerbtem Kragen Und Knöpfen Vorn",
    "description": "Taillenumfang : 92 cm,  Hüftenumfang : 108 cm,  Länge : 99.5 cm,  Schenkelumfang : 66.5 cm.",
    "images": {
      "protoTypes":[
        "https://img.ltwebstatic.com/images3_pi/2019/12/21/1576896097388ac99bca6a46bcf257b3b146259f72_thumbnail_600x.webp",
        "https://img.ltwebstatic.com/images3_pi/2019/12/21/1576896101b546fe296abd1f9ee02e5b8dd81d4cf2_thumbnail_600x.webp"
      ],

    },
    "prices": [
      19,
      8,
    ],
    "rating": 4,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },

  {
    "name": "Männer Hemd Mit Pflanzen Muster",
    "description": "Schulterbreite : 46.8 cm,  Brust : 112 cm,  Länge : 74 cm,  Ärmellänge : 22.6 cm,  Bizepslänge : 43.6 cm,  Ärmelaufschlag : 39.4 cm.",
    "images": {
      "protoTypes":[
        "https://img.ltwebstatic.com/images2_pi/2019/04/17/155548036891307857_thumbnail_600x799.webp",
        "https://img.ltwebstatic.com/images2_pi/2019/04/17/15554803652929144599_thumbnail_600x799.webp",
        "http://img.ltwebstatic.com/images2_pi/2019/06/18/15608496751022284329_thumbnail_600x799.webp"
      ]
    },
    "prices": [
      15,
      20,
    ],
    "rating": 5,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },

  {
    "name": "Männer Bomber Jacke mit Reißverschluss und Taschen Detail",
    "description": "Taillenumfang : 92 cm,  Hüftenumfang : 108 cm,",
    "images": {
      "protoTypes":[
        "https://img.ltwebstatic.com/images3_pi/2019/12/10/1575960957b5db496f0f340045d270716aaf7683a3_thumbnail_600x.webp",
        "https://img.ltwebstatic.com/images3_pi/2019/12/10/1575960960ef91e15deb9ce2e093f1b1e1da2d911a_thumbnail_600x.webp",

      ],

    },
    "prices": [
      34,
      17,
    ],
    "rating": 2,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },


  {
    "name": "Männer Hosen mit Tasche",
    "description": "mit Reißverschluss und Taschen Detail",
    "images": {
      "protoTypes":[
        "https://img.ltwebstatic.com/images2_pi/2019/05/17/15580895952502937241_thumbnail_600x799.webp",
        "https://img.ltwebstatic.com/images2_pi/2019/05/17/15580895931119593356_thumbnail_600x799.webp",

      ],

    },
    "prices": [
      25,
      13,
    ],
    "rating": 2,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },


  {
    "name": "Männer Sweatshirt mit Kordelzug",
    "description": "Bizepslänge : 43.6 cm,  Ärmelaufschlag : 39.4 cm.",
    "images": {
      "protoTypes":[
        "https://img.ltwebstatic.com/images2_pi/2018/10/08/15389841082733405005_thumbnail_600x799.webp",
        "https://img.ltwebstatic.com/images2_pi/2018/10/08/15389841092710265147_thumbnail_600x799.webp",

      ],

    },
    "prices": [
      55,
      13,
    ],
    "rating": 5,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },

  {
    "name": "Männer Sweatshirt  mit Kordelzug",
    "description": "Druckknöpfen Klassischer Kragen",
    "images": {
      "protoTypes":[
        "https://img.ltwebstatic.com/images2_pi/2018/10/08/15389841082733405005_thumbnail_600x799.webp",
        "https://img.ltwebstatic.com/images2_pi/2018/10/08/15389841092710265147_thumbnail_600x799.webp",

      ],

    },
    "prices": [
      55,
      13,
    ],
    "rating": 5,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },

  {
    "name": "Männer Jacke mit Buchstaben Grafik",
    "description": "mit Druckknöpfen Klassischer Kragen, lange Ärmel.",
    "images": {
      "protoTypes":[
      "https://img.ltwebstatic.com/images3_pi/2019/11/14/1573720789af0882a479798b01703266dad38d71af_thumbnail_600x.webp",
      "https://img.ltwebstatic.com/images3_pi/2019/10/29/1572330744fd2b89fa0648bfcc3aae0c052572b347_thumbnail_600x.webp",
      "https://img.ltwebstatic.com/images3_pi/2019/10/29/157233073891feb17c799101f221ead42c0327572f_thumbnail_600x.webp",
      ],

    },
    "prices": [
      40,
      22,
    ],
    "rating": 4,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },

  {
    "name": "GIVENCHY",
    "description": "Jeanshemd mit Druckknöpfen Klassischer Kragen, lange Ärmel. Hergestellt in: Italien",
    "images": {
      "protoTypes":[
      "https://cdn-images.farfetch-contents.com/15/13/29/22/15132922_26084999_1000.jpg",
      "https://cdn-images.farfetch-contents.com/15/13/29/22/15132922_26085012_1000.jpg",
      "https://cdn-images.farfetch-contents.com/15/13/29/22/15132922_26085004_1000.jpg"
      ],
  
    },
    "prices": [
      690,
      120,
    ],
    "rating": 5,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },

  {
    "name": "THOM BROWNE",
    "description": "Gerippte Jacke Gerippte Jacke aus Wolle von Thom Browne. Merkmale: gerader Schnitt, Reißverschluss an der Vorderseite, gerippter Kragen, gerippte Abschlüsse, seitliche Taschen und Futter.",
    "images": {
      "protoTypes":[
      "https://cdn-images.farfetch-contents.com/13/00/92/09/13009209_13770630_1000.jpg",
      "https://cdn-images.farfetch-contents.com/13/00/92/09/13009209_13770636_1000.jpg",
      "https://cdn-images.farfetch-contents.com/13/00/92/09/13009209_13770645_1000.jpg"
      ],
 
    },
    "prices": [
      300,
      400
    ],
    "rating": 5,
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ]
  },
]

// to add products
// womens.forEach(item => {
//       let sql = `INSERT INTO Main_Products (productType, productName, productDescription)
//     VALUES(
//       ${pool.escape(String("female"))},
//       ${pool.escape(String(item.name))},
//       ${pool.escape(String(item.description))}
//     )`
//     pool.query(sql, (err, fields) => {
//       if(err)throw err
//       console.log('inserted')
//     })
//   })<
// for (let i = 0; i < men.length; i++){

//   men[i].prices.forEach((element) => {

//    let sql = `INSERT INTO Product_Prices (productId, prices, productType)
//     VALUES(
//       ${i + 1},
//       ${pool.escape(String(element))},
//       ${pool.escape(String("male"))}
//     )`
//     pool.query(sql, (err, fields) => {
//       if(err)throw err
//       console.log(i+ 1 +'inserted')
//     })

//   });
// }

// for (let i = 0; i < womens.length; i++){

//   womens[i].prices.forEach((element) => {

//    let sql = `INSERT INTO Product_Prices (productId, prices, productType)
//     VALUES(
//       ${i + 11},
//       ${pool.escape(String(element))},
//       ${pool.escape(String("female"))}
//     )`
//     pool.query(sql, (err, fields) => {
//       if(err)throw err
//       console.log(i+ 11 +'inserted')
//     })

//   });
// }






   
//  let sql = `SELECT * FROM Main_Products WHERE productId =`+i+1
//   pool.query(sql, (err, row) => {
//       if(err)throw err
//       console.log(row[0].productId)
//   })


  // let sql = `INSERT INTO Product_Images (productId, images)
  //   VALUES(
  //     ${pool.escape(String(item.name))},
  //     ${pool.escape(String(item.images))}
  //   )`
  //   pool.query(sql, (err, fields) => {
  //     if(err)throw err
  //     console.log('inserted')
  //   })


    

module.exports = router;
