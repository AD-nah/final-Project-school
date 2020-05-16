const jwt = require ('jsonwebtoken');
const bcryptjs = require ('bcryptjs');
module.exports = {

    isValidPassword: (hashedPassword, password) => {
        return bcryptjs.compareSync(password, hashedPassword)
    },
    generateJWT: (userId, email) => {

       const generateJWT = (userId, email) => {

            return jwt.sign({
                userId : userId,
                email : email
                // confirmed: this.confirmed
              },
              process.env.JWT_SEC
            )
        }

        return {
            token: generateJWT(userId, email),
        }
    },
    setPassword: (password) => {
        return bcryptjs.hashSync(password, 10)
    },
    generateResetPasswordUrl:(userId) => {

       const generateResetPasswordToken = (userId) => {
            return jwt.sign({
                userId : userId
                }, 
                process.env.JWT_SEC,
                { expiresIn: '1h'}
            )   
        }

        return `https://scount.herokuapp.com/reset-password-route/${generateResetPasswordToken(userId)}`;
    }

}




  