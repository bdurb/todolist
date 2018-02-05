const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const Todo = require('./models/todo');

const server = express();
server.use(bodyParser.json());
server.use(cors());

mongoose.Promise = global.Promise;
const connect = mongoose.connect(
  'mongodb://localhost/Tododb',
);

connect.then(() => {
  const port = 3333
  const routes = require('./routes/routes');
  routes(server);
  server.listen(3333);
  console.log(`Server listening on port ${port}`);
}, (err) => {
  console.log('ERROR: failed to connect to MongoDB');
});