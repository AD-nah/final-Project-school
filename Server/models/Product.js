
const mongoose = require ("mongoose");

const productSchema = new mongoose.Schema({
    product_type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'types'
    },
    name: { 
      type: String, 
      required: true, 
    },
    description: { 
      type: String, 
      required: true 
    },
    images:{
      type : Array,
      required : false
    },
    prices: {
      type: Array,
      required: true
    },
    rating: { 
      type: Number,
      required : false
    }
  },
)

module.exports = mongoose.model("Product", productSchema);

