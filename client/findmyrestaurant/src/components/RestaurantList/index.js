import React from "react";

import "components/RestaurantList/RestaurantList.scss";
import RestaurantItem from "components/RestaurantItem";

const renderRestaurants = restaurants =>{
  return restaurants.map(restaurant =><RestaurantItem key={restaurant._id} {...restaurant}/>);
}

export default function RestaurantList(props) {
  return (
    <div className="restaurant-list">
      {renderRestaurants(props.restaurants)}
    </div>
  );
}
