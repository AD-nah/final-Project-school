const mongoose = require ("mongoose");
const bcryptjs = require ('bcryptjs');
const jwt = require ('jsonwebtoken');
//const uniqueValidator = require ('mongoose-unique-validator');


const userSchema = new mongoose.Schema({

    firstName: { 
      type: String, 
      required: false 
    },
    lastName: { 
      type: String, 
      required: false 
    },
    email: { 
      type: String, 
      required: true, 
      lowercase: true, // to transform to lowercase
      index: true, // email will be main attribute
      // unique: true  // uniqueValidator
    },
    userPassword: { 
      type: String, 
      required: true 
    },

    country: { 
      type: String, 
      required: false 
    },
    city: { 
      type: String, 
      required: false 
    },
    postCode: { 
      type: String, 
      required: false 
    },
    userAddress: { 
      type: String, 
      required: false 
    },
    phoneNumber: { 
      type: String, 
      required: false 
    },
    birthDate: { 
      type: String, 
      required: false 
    },

    loggedinToken:{
      type:String,
      required:false
    },
    lastLoggedinDate: {
      type: Date,
      required: false
    }/* ,
    lastLoggedOutDate: {
      type: Date,
      required:false
    } */
  },
  { timestamps: true }
)
//userSchema.plugin(uniqueValidator, { message: "This email is already Exsist" });

userSchema.methods.saveCurrentJWTtoDB = function saveCurrentJWTtoDB(token){  
  this.loggedinToken = token
}
userSchema.methods.saveLastLoggedInDate = function saveLastLoggedInDate(date){  
  this.lastLoggedinDate = date
}
// userSchema.methods.saveLastLoggedOutDate = function saveLastLoggedOutDate(date){
//   this.loggedinToken = 'offline'  
//   this.lastLoggedOutDate = date
// }
userSchema.methods.isValidPassword = function isValidPassword(password) {
  return bcryptjs.compareSync(password, this.userPassword)
}

userSchema.methods.toAuthJSON = function toAuthJSON() {
  return {
    token: this.generateJWT(),
  }
}

userSchema.methods.generateJWT = function generateJWT() {
  return jwt.sign({
      userId: this._id,
      email: this.email,
      //confirmed: this.confirmed
    },
    process.env.JWT_SEC
  )
}

userSchema.methods.setPassword = function setPassword(password){
  this.userPassword = bcryptjs.hashSync(password, 10)
}

module.exports = mongoose.model("User", userSchema);
