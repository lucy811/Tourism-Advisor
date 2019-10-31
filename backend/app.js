const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const travelInfoRoutes = require('./routes/travel-info');
const userRoutes = require('./routes/user');

const app = express();

mongoose.connect("mongodb+srv://charlie:D3gRb4bhNB7FGu1V@cluster0-vtil8.mongodb.net/tourism-advisor-database", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => {
    console.log('Connected to database!');
  })
  .catch(()=> {
    console.log('Connection failed!');
  })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));

app.use('/images', express.static('backend/images'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); 
  // no matter which domain the app which is sending the request is running on, 
  // it's allowed to access our resources
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE, OPTIONS'
  );
  next();
});

app.use(travelInfoRoutes);
app.use(userRoutes);

module.exports = app;
