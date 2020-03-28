// Here we're configuring our web server Express. We've already installed it in package.json

//var express = require('express');
//var path = require('path');
//var open = require('open');           //To open site in browser

//var port = 3000;

//Instantiating an object of express
//var app = express();

// New way to write after having babel
import express from 'express';
import path from 'path';
import open from 'open';           //To open site in browser
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 3000;

//Instantiating an object of express
const app = express();

// Here we got the compiler in return by passing config file to webpack
const compiler = webpack(config);

//Here we're telling express what we would like to use - 1. webpack-dev-middleware 2. compiler that we defined above
app.use(require('webpack-dev-middleware')(compiler,{
  noInfo:true,                                    //Don't display files
  publicPath:config.output.publicPath             //Here we're refering to the publicPath that we defined under webpack.config.dev.js i.e. '/'
}));


//Now lets tell express which route it is supposed to handle
app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'../src/index.html'));
});

//Telling express to listen which port to listen to.
app.listen(port, (err)=>
{
  if(err){
    console.log(err);
  }
  else{
    open('http://localhost:'+port);
  }
})
