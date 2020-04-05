const mongoose = require('mongoose');
const Location = require('./Location');

const { Schema } = mongoose;

//This scema needs to contain all the keys which can be there in any user record.
const restaurantSchema = new Schema({
  _id: Number,
  name: String,
  location: {
    type: Location
  },
  cuisines: String,
  timings: String,
  average_rating: {type: Number, default:0},
  all_reviews_count: {type: Number, default:0},
  image_url:String,
  phone_numbers:String
}, {_id: false});

//Create a mongoose class which corresponds to users collection in MongoDB
mongoose.model("restaurant", restaurantSchema);
