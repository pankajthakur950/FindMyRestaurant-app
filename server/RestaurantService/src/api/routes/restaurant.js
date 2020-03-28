const mongoose = require("mongoose");
const Restaurant = mongoose.model("restaurant");

module.exports = app => {
  app.get("/api/restaurants", async (req, res, next) => {
    try {
      const results = await Restaurant.find({}).limit(10).skip(20);
      res.send(results);
    } catch (error) {
        console.log("@@@@@@@@@@@@ "+error);
      return next(error);
    }
  });

  app.get("/api/restaurant", (req, res) => {
    res.send("fetching restaurant");
  });

  app.get("/saveRestaurants", (req, res) => {
    const fs = require("fs");

    let rawdata = fs.readFileSync("./src/config/restaurantData.json");
    let restaurantData = JSON.parse(rawdata);

    for (var i = 0; i < 50; i++) {
      (function(index) {
        let obj = restaurantData[index];
        obj.restaurant_id = index;
        new Restaurant(obj).save().then(
          restaurant => {
            console.log(restaurant);
          },
          error => {
            console.log(error);
          }
        );
      })(i);
    }

    res.send("saving restaurants");
  });
};
