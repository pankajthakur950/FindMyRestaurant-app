const axios = require("axios");
const BASE_URL = "http://localhost:3001"

const getAllRestaurants = async (page_num) => {
    try {
        const response = await axios.get(`${BASE_URL}/api/restaurants?page_num=${page_num}`);
        const restaurantList = response.data;
        return restaurantList;
    } catch (error) {
        return Promise.reject(error);
    }
};

const getRestaurant = async (id) => {
    try {
        const restaurantResponse = await axios.get(`${BASE_URL}/api/restaurants/${id}`);
        const reviewResponse = await axios.get(`${BASE_URL}/api/reviews/${id}`);
        const restaurant = restaurantResponse.data;
        restaurant.reviews = reviewResponse.data;
        return restaurant;
    } catch (error) {
        return Promise.reject(error);
    }
};

const addReview = async (args) => {
    try {
        const reviewObject = {review: {...args}};
        const response = await axios.post(`${BASE_URL}/api/reviews`, reviewObject);
        return response.data;
    } catch (error) {
        console.log(error);
        return Promise.reject(error);
    }
};

module.exports = {
    getAllRestaurants,
    getRestaurant,
    addReview
};
