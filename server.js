const http = require("http");
const https = require('https')  
const cors = require('cors')
const express = require('express');
const hostname = "127.0.0.1";
const port = 8000;

const app = express()


// require('./API/database/bootstrap/sequelize')

// Registering for dotenv npm library

const options = {

}

app.use(cors({
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
  exposedHeaders: ['Content-Disposition']
}))

// Create HTTP server
http.createServer(app).listen(80)
var server = https.createServer(options, app).listen(443, function () {
  console.log('server started: ', 443)
})
app.get('/', function(req, res) {
  res.send('Hello World!')
});
server.timeout = 240000

// For routing

require('./API/routes')(app);
