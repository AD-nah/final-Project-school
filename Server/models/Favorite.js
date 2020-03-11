

const mongoose = require('mongoose')



const favoriteSchema = mongoose.Schema({
      user_ID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
      },
      favorite : {
        type : Array,
        required: false
      }
})

module.exports = mongoose.model("Favorite", favoriteSchema);


