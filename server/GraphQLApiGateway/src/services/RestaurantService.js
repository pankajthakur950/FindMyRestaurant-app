const axios = require("axios");
const BASE_URL = "http://localhost:3001"

const getAllRestaurants = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/api/restaurants`);
        const restaurantList = response.data;
        const allRestaurants = {};
        allRestaurants.results_found = restaurantList.length;
        allRestaurants.restaurants = restaurantList;
        return allRestaurants;
    } catch (error) {
        return Promise.reject(error);
    }
};

const getRestaurant = async (id) => {
    try {
        console.log(`${BASE_URL}/api/restaurants/${id}`);
        const response = await axios.get(`${BASE_URL}/api/restaurants/${id}`);
        console.log(response);
        const restaurant = response.data;
        return restaurant;
    } catch (error) {
        return Promise.reject(error);
    }
};

module.exports = {
    getAllRestaurants,
    getRestaurant
};
