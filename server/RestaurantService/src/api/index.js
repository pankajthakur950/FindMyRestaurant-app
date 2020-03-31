const restaurantRoutes = require('./routes/restaurant');
const searchRestaurantRoutes = require('./routes/searchRestaurant');
const reviewRoutes = require('./routes/review');

module.exports = app => {
    restaurantRoutes(app);
    searchRestaurantRoutes(app);
    reviewRoutes(app);
};