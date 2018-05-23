'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var fs = require("fs")

var server = express();

server.use(bodyParser.urlencoded({extended: false}))
server.use(bodyParser.json())

var hexo = require('./src/hexo-command/hexo-generate')

new hexo.Hexo().start(server)




server.listen(30088);