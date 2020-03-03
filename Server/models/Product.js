
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
    image:{
      type:String,
      required:false
    },
    price: {
      type: Number,
      required: false
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model("Product", productSchema);

