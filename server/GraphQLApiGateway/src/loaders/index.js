const graphQLLoader = require('./graphQLLoader');
const expressLoader = require('./expressLoader');

module.exports = app => {
    graphQLLoader(app);
    expressLoader(app);
};
