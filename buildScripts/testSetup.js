//This file isn't transpiled, so must use CommomJS and Es5

//Register/Asking Babel to transpile before our tests run
require('babel-register')();

//Disable webpack features that mocha doesn't understand. Here we're telling mocha that if you see '.css import' anywhere, assume it to be empty function
require.extensions['.css'] = function() {};
