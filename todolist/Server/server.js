const express = require('express');
const server = express();

const STATUS_USER_ERROR = 422;

server.get('/',(req, res) => {
    res.send({hello: 'Hello World'})
  })
server.listen(3001, () => {
  console.log("Running on port 3001")
})