const jwt = require ('jsonwebtoken');
const bcryptjs = require ('bcryptjs');
const pool = require('./mySql')





module.exports = {

    isValidPassword: (password) => {

    },
    toAuthJSON: (User_Id, email) => {

       const generateJWT = (User_Id, email) => {

            return jwt.sign({
                User_Id : User_Id,
                email : email
    
                // confirmed: this.confirmed
              },
              process.env.JWT_SECRET
            )
        }

        return {
            token: generateJWT(User_Id, email),
        }
    },
    setPassword: (password) => {
        return bcryptjs.hashSync(password, 10)
    },
}




 
//   userSchema.methods.isValidPassword = function isValidPassword(password) {
//     return bcryptjs.compareSync(password, this.hashedPassword)
//   }
  
//   userSchema.methods.toAuthJSON = function toAuthJSON() {
//     return {
//       token: this.generateJWT(),
//     }
//   }
  
//   userSchema.methods.generateJWT = function generateJWT() {
//     return jwt.sign({
//         userID: this._id,
//         email: this.email,
//         //confirmed: this.confirmed
//       },
//       process.env.JWT_SECRET
//     )
//   }
  

  