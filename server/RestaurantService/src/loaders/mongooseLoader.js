const mongoose = require('mongoose');
const keys = require('../config/keys');
const models = require('../models');

module.exports = () => {
  //load mongoose connection
  console.log(keys.mongoURI);
  mongoose
    .connect(keys.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log("@@@@@@@@@@@@@@ SUCCESS....");
      
    })
    .catch(error => {
      console.log(error);
    });
};
models();