const mongoose = require ("mongoose");
const bcryptjs = require ('bcryptjs');
const jwt = require ('jsonwebtoken');
//const uniqueValidator = require ('mongoose-unique-validator');


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
    } ,
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
  return bcryptjs.compareSync(password, this.hashedPassword)
}

userSchema.methods.toAuthJSON = function toAuthJSON() {
  return {
    token: this.generateJWT(),
  }
}

userSchema.methods.generateJWT = function generateJWT() {
  return jwt.sign({
      userID: this._id,
      email: this.email,
      //confirmed: this.confirmed
    },
    process.env.JWT_SEC
  )
}

userSchema.methods.setPassword = function setPassword(password){
  this.hashedPassword = bcryptjs.hashSync(password, 10)
}

module.exports = mongoose.model("User", userSchema);
