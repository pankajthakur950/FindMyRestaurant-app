const express = require('express');
const loaders = require('./loaders');
const keys = require('./config/keys');

const app = express();
loaders(app);

const PORT = process.env.PORT || keys.servicePort;
app.listen(PORT);
console.log("GraphQL api gateway is up on port : "+PORT);
