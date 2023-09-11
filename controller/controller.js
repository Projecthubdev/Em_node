'use strict';

var properties = require('../package.json');
var controllers = { 
  about: function(req,res){ 
      var aboutInfo = { name:properties.name, version: properties.version }
      res.json(aboutInfo); 
  }, 
  test: function(req, res) {
    res.json(console.log("Hello, world 2"));
}

};

module.exports = controllers;