const http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200,{'content-Type':'text/plain'})
    res.end( " Hello Team!! Deploying a Node.js Application On AWS-EC2 Instance and Here It's working Successfully.....  ")
  }).listen(8080);

console.log('Server is Running Successfull!!!!');
console.log('Server is Listening on your ec2 Public IPv4 address:8080');
