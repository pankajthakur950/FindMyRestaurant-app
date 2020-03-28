const mongoose = require('mongoose');
const Location = require('./Location');

const { Schema } = mongoose;

//This scema needs to contain all the keys which can be there in any user record.
const restaurantSchema = new Schema({
  restaurant_id: { type: String, unique: true },
  name: String,
  location: {
    type: Location
  },
  cuisines: String,
  timings: String,
  all_reviews_count: Number
});

//Create a mongoose class which corresponds to users collection in MongoDB
mongoose.model("restaurant", restaurantSchema);
