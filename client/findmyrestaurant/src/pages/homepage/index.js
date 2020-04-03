import React from "react";
import { connect } from "react-redux";
import RestaurantList from "components/RestaurantList";
import Button from "components/Button";

import { fetchRestaurants } from "actions";

import "pages/homepage/homepage.scss";

class Homepage extends React.Component {
  componentDidMount() {
    this.props.fetchRestaurants();
  }
  render() {
    return (
      <section className="restaurant-list-section">
        <div className="container">
          <div className="row">
            <div className="section-title text-center">
              <h3>
                <span>Featured Restaurants in Your City</span>
              </h3>
              <p>Hand-Picked Restaurants with Exclusive Menus near you</p>
            </div>
          </div>
          <div className="restaurant-list-wrapper">
            <RestaurantList restaurants={this.props.restaurants} />
          </div>
          <div className="text-center">
            <Button>More Restaurants</Button>
          </div>
        </div>
      </section>
    );
  }
}

const mapStatetoProps = ({ restaurant }) => {
  return {
    restaurants: restaurant.restaurants,
    restaurantCount: restaurant.results_found
  }
}

export default connect(mapStatetoProps, { fetchRestaurants })(Homepage)
