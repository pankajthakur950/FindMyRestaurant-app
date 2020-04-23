import React from "react";
import { connect } from "react-redux";
import RestaurantList from "components/RestaurantList";
import Button from "components/Button";

import { fetchRestaurants } from "actions";
import HeroImage from "assets/hero-image.jpg";

import "pages/homepage/homepage.scss";

class Homepage extends React.Component {
  constructor(props){
    super(props);
    this.state={
      page_num:1
    }
  }
  fetchMoreRestaurants = () => {
    const page_num = this.state.page_num + 1
    this.setState({page_num})
    this.props.fetchRestaurants(page_num);
  }
  componentDidMount() {
    this.props.fetchRestaurants(1);
  }
  render() {
    return (
      <section className="restaurant-list-section">
        <div className="hero-image-container">
          <div className="hero-banner" style={{ backgroundImage: `url(${HeroImage})` }}>
            <div className="hero-banner__content">
                <h1 class="hero-header">FIND THE BEST RESTAURANTS AT THE BEST PRICE</h1>
                <p class="hero-subHeader">More than 20,000 restaurants all around the world and in your country or city</p>
                <form id="searchForm">
                  <input class="search-input" placeholder="Search restaurants in city"/>
                  <Button classes="search-btn">Find</Button>
                </form>
                <p><a href="#"/>Or view all 360 restaurants in and/or around your current city</p>
            </div>
          </div>
        </div>
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
            {
              this.props.restaurantRendered < this.props.restaurantCount ?
              <Button onClick={this.fetchMoreRestaurants}>More Restaurants</Button> : 
              null
            }
          </div>
        </div>
      </section>
    );
  }
}

const mapStatetoProps = ({ restaurant }) => {
  return {
    restaurants: restaurant.restaurants,
    restaurantCount: restaurant.results_found,
    restaurantRendered: restaurant.results_shown
  }
}

export default connect(mapStatetoProps, { fetchRestaurants })(Homepage)
