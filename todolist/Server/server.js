const express = require('express');
const server = express();

const STATUS_USER_ERROR = 422;

server.get('/',(req, res) => {
    res.send({hello: 'Hello World'})
  })
const httpserver = server.listen(3001, () => {
  const { address, port} = httpserver.address()
  console.log(`listening on http://${address}:${port}`)
})