var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var server = express();

require('dotenv').config('./.env')

require('mongoose').connect(process.env.SERVER_DB_URI_CLOUD, { 
    // require('mongoose').connect(process.env.SERVER_DB_URI_LOCAL, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
    

}, ( err, res ) => {
    if( err ){ 
        console.log('database connecton Error: ', err )
    }else{
        console.log('Connected:',[res.name, res.host, res.user])
    }
})

server.use(logger('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cookieParser());
server.use(express.static(path.join(__dirname, 'public')));

server.use('/', require('./routes/index'));
server.use('/users', require('./routes/users'));
server.use('/api/auth-req',    require('./routes/auth'))
// server.use('/api/logout-req',    require('./routes/logout'))
server.use('/api/register-req',    require('./routes/register'))

server.use('/product', require('./routes/product'));

module.exports = server;
