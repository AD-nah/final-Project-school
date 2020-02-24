var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var server = express();

server.use(logger('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cookieParser());
server.use(express.static(path.join(__dirname, 'public')));

server.use('/', require('./routes/index'));
server.use('/users', require('./routes/users'));
server.use('/api/auth-req',    require('./routes/auth'))

module.exports = server;
