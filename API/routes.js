/** This file is used for combined all routes in single route **/
'use strict'
var fs = require('fs')
var path = require('path')

module.exports = function (app) {
  var moduleFiles = fs.readdirSync(path.join(__dirname, '/modules'))
  for (var i = 0; i < moduleFiles.length; i++) {
    var routeLoc = path.join(__dirname, '/modules/') + moduleFiles[i]
    var routeFiles = fs.readdirSync(routeLoc)
    routeFiles.forEach(function (file) {
      var fileName = file.split('.')
      var modelData = fileName[1]
      console.log(modelData)
      if (modelData === 'routes' || modelData === 'controller') {
        return require(routeLoc + '/' + file)(app);
      }
    })
  }
}
