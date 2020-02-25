const mongoose = require ("mongoose");
const bcryptjs = require ('bcryptjs');
const jwt = require ('jsonwebtoken');
const uniqueValidator = require ('mongoose-unique-validator');


const userSchema = new mongoose.Schema({
    email: { 
      type: String, 
      required: true, 
      lowercase: true, // to transform to lowercase
      index: true, // email will be main attribute
      unique: true  // uniqueValidator
    },
    hashedPassword: { 
      type: String, 
      required: true 
    }
  },
  { timestamps: true }
)

userSchema.plugin(uniqueValidator, { message: "This email is already Exsist" });

userSchema.methods.isValidPassword = function isValidPassword(password) {
  return bcryptjs.compareSync(password, this.hashedPassword)
}

userSchema.methods.toAuthJSON = function toAuthJSON() {
  return {
    email: this.email,
    //confirmed: this.confirmed,
    token: this.generateJWT()
  }
}

userSchema.methods.generateJWT = function generateJWT() {

  return jwt.sign({

      email: this.email,

      confirmed: this.confirmed

    },
    process.env.JWT_SECRET
  )
}


module.exports = mongoose.model("User", userSchema);