const http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200,{'content-Type':'text/plain'})
    res.end("  Hello Team!! It's working 🤗 ")
  }).listen(8080);

console.log('Server is Running Successfull!!!!');
