const mongoose = require("mongoose");
const keys = require("../config/keys");
const models = require("../models");

module.exports = () => {
  //load mongoose connection
  mongoose
    .connect(keys.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log("Successfully connected to the user database");
    })
    .catch(error => {
      console.log(error);
    });
};
models();
