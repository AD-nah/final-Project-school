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
              process.env.JWT_SECRET
            )
        }

        return {
            token: generateJWT(userId, email),
        }
    },
    setPassword: (password) => {
        return bcryptjs.hashSync(password, 10)
    },
}