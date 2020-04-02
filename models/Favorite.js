

const mongoose = require('mongoose')



const favoriteSchema = mongoose.Schema({
  userId: {
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'users'
        type : String
      },
      favorite : {
        type : Array,
        required: false
      },
      favorite_owner:{
        type:String,
        required:true
      }
})

module.exports = mongoose.model("Favorite", favoriteSchema);


