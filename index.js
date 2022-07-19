const http = require('http');

const port = process.env.PORT || 8080;

http.createServer(function (req, res) {
  res.writeHead(200,{'content-Type':'text/plain'})
    res.end("  Hello Team!! It's working 🤗 ")
  });

app.listen(port, () => console.log(`Listening on port ${port}`));

console.log('Server is Running Successfull!!!!');
