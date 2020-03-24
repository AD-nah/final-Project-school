let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let server = express();







require('dotenv').config('./.env')
//require('mongoose').connect(process.env.SERVER_DB_URI_LOCAL, { 
require('mongoose').connect(process.env.SERVER_DB_URI_CLOUD, {

    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,


}, (err, res) => {
    if (err) {
        console.log('database connecton Error: ', err)
    } else {
        console.log('Connected:', [res.name, res.host, res.user])
    }
})







server.use(logger('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cookieParser());
server.use(express.static(path.join(__dirname, 'public')));






//////////////////////  Authentication //////////////////////
server.use('/', require('./routes/index'));
server.use('/users', require('./routes/users'));
server.use('/api/auth-post', require('./routes/auth'))
// server.use('/api/logout-post',    require('./routes/logout'))
server.use('/api/register-post', require('./routes/register'))

server.use('/api/register-post', require('./routes/register'))




////////  Save item to basket and send the hole basket to the client ///////
server.use('/api/product', require('./routes/product'));
server.use('/api/basket', require('./routes/basket'));

//calling paypal from the routes
server.use('/paypal',require('./routes/Paypal'));


module.exports = server;
 