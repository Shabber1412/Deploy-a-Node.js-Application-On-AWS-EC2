const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get("/test", (req, res) => {
    res.send("<h1> Hello Team!! It's working 🤗 </h1>")
  });

app.listen(port, () => console.log(`Listening on port ${port}`));

console.log('Server is Running Successfull!!!!');