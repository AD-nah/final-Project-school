var mysql      = require('mysql');

var pool = mysql.createPool({
    // connectionLimit:15,
     host:"localhost",
     user:"root",
     password:"",
     database:"fpDB"
 })




pool.getConnection((err, connnection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.')
        }
    }
    if(connnection) {
        console.log('connected to mySQL')
       return connnection.release()
    }

    return
})



module.exports = pool