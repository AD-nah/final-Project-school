const mongoose = require('mongoose')



const basketSchema = mongoose.Schema({
      user_ID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
      },
      basket : {
        type : Array,
        required: false
      },
      basket_owner:{
        type:String,
        required:true
      }
})

module.exports = mongoose.model("Basket", basketSchema);







// const mongoose = require('mongoose')

// const basketSchema = mongoose.Schema({
//     product_type: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'types'
//       },
//       name: {
//         type: String,
//         required: true,
//       },
//       description: {
//         type: String,
//         required: true
//       },
//       images: {
//         type: Object,
//           protoTypes: [],
//           colors:{}
//       },
//       prices: {
//         type: Array,
//         required: true
//       },
//       rating: {
//         type: Number,
//         required: false
//       },
//       sizes: {
//         type: Array,
//         required: false
//       },
//       colors: {
//         type: Array,
//         required: false
//       }
// })

// module.exports = mongoose.model("Basket", basketSchema);
