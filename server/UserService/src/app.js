const express = require('express');
const keys = require('./config/keys');
const loaders = require('./loaders');

const app = express();
loaders(app);

const PORT = process.env.PORT || keys.PORT;
app.listen(PORT);
