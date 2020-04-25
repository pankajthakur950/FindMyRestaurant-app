import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchRestaurants } from "actions";
import RestaurantList from "components/RestaurantList";
import Map from "components/Map";
import "pages/search/search.scss";

class Search extends Component {
    state = {
        mapProps: {
            options: {
                center: {
                    lat: this.props.restaurants[0].location.latitude,
                    lng: this.props.restaurants[0].location.longitude
                },
                zoom: 12
            },
            restaurants: this.props.restaurants,
            highlightRestaurant: this.props.restaurants[0]
        }
    }
    highlightRestaurant = (restaurant) => {
        if (this.state.mapProps.highlightRestaurant !== restaurant) {
            this.setState({ mapProps: { ...this.state.mapProps, highlightRestaurant: restaurant } });
        }
    }
    searchRestaurants = async (bounds) => {
        try {
            const searchQuery = {
                "minLong": bounds.Ta.g,
                "maxLong": bounds.Ta.i,
                "minLat": bounds.Ya.g,
                "maxLat": bounds.Ya.i,
                "searchType": "coordinates"
            };
            await this.props.searchRestaurants(searchQuery);
            const mapProps = {...this.state.mapProps, 
                                restaurants: this.props.restaurants,
                                highlightRestaurant: this.props.restaurants[0]}
            this.setState({mapProps})
        } catch (error) {
            console.log("Something went wrong while search", error.message);
        }
    }
    render() {
        return (
            <div className="search-container container">
                <h1>
                    {
                        this.props.location.state.searchLocation === "current" ? 
                        "Restaurants near you" :
                        `Restaurants in ${this.props.location.state.searchLocation}`
                    }
                </h1>
                <p class="results-found">{this.props.restaurants.length} results found</p>
                <div className="restaurant-list-view">
                    <div className="restaurant-list-wrapper">
                        <RestaurantList restaurants={this.props.restaurants} restaurantHovered={this.highlightRestaurant} />
                    </div>
                </div>
                <div className="restaurant-map-view">
                    <Map {...this.state.mapProps} searchRestaurants={this.searchRestaurants} />
                </div>
            </div>
        )
    }
}

const mapStatetoProps = ({ restaurant }) => {
    return {
        restaurants: restaurant.searchResults
    }
}

export default connect(mapStatetoProps, { searchRestaurants })(Search)
