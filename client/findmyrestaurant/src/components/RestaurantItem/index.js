import React from "react";

import "components/RestaurantItem/RestaurantItem.scss";
import { FaMapMarkerAlt } from "react-icons/fa";
import StarRatingComponent from 'react-star-rating-component';

export default function RestaurantItem({ image_url, name, location, average_rating, all_reviews_count, cuisines }) {
  return (
    <div className="restaurant-item-container">
      <div className="restaurant-item">
        <div className="restaurant-item__image">
          <img src={image_url} alt={`${name}`} />
        </div>
        <div className="restaurant-item__content">
          <h5 className="name">{name}</h5>
          <p className="location">
            <FaMapMarkerAlt />
            <span>{location.address}</span>
          </p>
          <div className="rating-wrapper">
            <div className="rating-item">
              <span style={{ cursor: "default", verticalAlign: "middle", fontSize: 20 }}>
                <StarRatingComponent
                  name="rate"
                  editing={false}
                  starCount={5}
                  value={average_rating}
                />
              </span>
              <span className="texting"> ({all_reviews_count} reviews)</span>
            </div>
            <p className="cuisine">
              <div>
                Cuisine:
                </div>
              <div>
                {
                  cuisines.split(",").map(cuisine => <span className="cuisine-item">{cuisine}</span>)
                }
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}