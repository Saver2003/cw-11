const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const cors = require('cors');

const users = require('./app/users');
const products = require('./app/products');

const app = express();

const port = 8000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(config.db.url + '/' + config.db.name);

const db = mongoose.connection;

db.once('open', () => {
  console.log('Mongoose connected!');

  app.use('/users', users());
  app.use('/products', products());


  app.listen(port, () => {
    console.log(`Server started on ${port} port!`);
  })
});

