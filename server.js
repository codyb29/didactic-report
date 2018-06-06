// Initialize modules the server will run on
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();

// Connect the Express server to our Angular code
app.use(express.static(path.join(__dirname, 'dist/didactic-report')));


// Initialize our port
const port = '3000';
app.set('port', port);

// Enable http protocol to our server
const server = http.createServer(app);
server.listen ()

// Run server
app.listen(port);
console.log('Server running at http://localhost:3000/');

// Not sure what this is for but saw that it's good practice
module.exports = app;