const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose')

const Todo = require('./models/todo');

const server = express();
server.use(bodyParse.json());

mongoose.Promise = global.Promise;
const connect = mongoose.connect(
  'mongodb://localhost/Tododb',
  { useMongoClient: true }
);

connect.then(() => {
  const port = 3000
  const routes = require('./routes/routes');
  Routes(server);
  server.listen(3000);
  console.log(`Server listening on port ${port}`);
}, (err) => {
  console.log('ERROR: failed to connect to MongoDB');
});