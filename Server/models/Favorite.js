

const mongoose = require('mongoose')



const favoriteSchema = mongoose.Schema({
      user_ID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
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


