const mongoose = require("mongoose");
const Restaurant = mongoose.model("restaurant");

const getRestaurantById = async _id => {
  try {
    const restaurant = await Restaurant.findById({ _id });
    return restaurant;
  } catch (error) {
    if (error instanceof mongoose.Error.CastError) return [];
    throw error;
  }
};

const searchRestaurant = async searchCriteria => {
  try {
    const restaurant = await Restaurant.filterData(searchCriteria);
    return restaurant;
  } catch (error) {
    if (error instanceof mongoose.Error.CastError) return [];
    throw error;
  }
};

const updateRestaurantReviewAndRating = async (_id, rating) => {
  try {
    const restaurant = await Restaurant.findById({ _id });
    const totalRating = (restaurant.all_reviews_count * restaurant.average_rating) + rating;
    restaurant.all_reviews_count = restaurant.all_reviews_count + 1;
    restaurant.average_rating = (totalRating/restaurant.all_reviews_count).toFixed(2);
    restaurant.save();
  } catch (error) {
    console.log("Not updated");
  }
};

module.exports = {
  getRestaurantById,
  updateRestaurantReviewAndRating,
  searchRestaurant
};
