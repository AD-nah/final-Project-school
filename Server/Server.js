

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var server = express();

require('dotenv').config('./.env')
// var pool = require('./mySql')


//require('mongoose').connect(process.env.SERVER_DB_URI_LOCAL, { 
require('mongoose').connect(process.env.MONGO, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
}, ( err, res ) => {
    if( err ){ 
        console.log('database connecton Error: ', err )
    }else{
         console.log('connected to mongodb:',[res.name, res.user])
  
    }
})


server.use(logger('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cookieParser());

server.use(express.static(path.join(__dirname, 'build')));


//////////////////////  Authentication //////////////////////
// server.use('/', require('./routes/index'));
server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

server.use('/users', require('./routes/users'));
server.use('/api/auth-post', require('./routes/auth'))
// server.use('/api/logout-post',    require('./routes/logout'))
server.use('/api/register-post', require('./routes/register'))

server.use('/api/register-post', require('./routes/register'))

server.use('/api/forgotpassword-post', require('./routes/forgotpassword'));
server.use('/api/validateresetpasswordtoken-post', require('./routes/validateresetpasswordtoken'));
server.use('/api/resetpassword-post', require('./routes/resetpassword'));



////////  Save item to basket and send the hole basket to the client ///////
server.use('/api/product', require('./routes/product'));
server.use('/api/basket', require('./routes/basket'));
server.use('/api/favorite', require('./routes/favorite'));

//calling paypal from the routes
server.use('/paypal',require('./routes/Paypal'));


server.listen(process.env.PORT || 3001, () => console.log(`Example app listening`))


// module.exports = server;
 