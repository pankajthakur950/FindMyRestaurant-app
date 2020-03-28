const restaurantRoutes = require('./routes/restaurant');
const searchRestaurantRoutes = require('./routes/searchRestaurant');

module.exports = app => {
    restaurantRoutes(app);
    searchRestaurantRoutes(app);
};