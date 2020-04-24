import React, { Component } from 'react';
import { connect } from 'react-redux';

import RestaurantList from "components/RestaurantList";
import Map from "components/Map";
import "pages/search/search.scss";

class Search extends Component {
    addMarkers = (map, infowindow) => {
        this.props.restaurants.forEach((restaurant, index) => {
            const position = {
                lat: restaurant.location.latitude,
                lng: restaurant.location.longitude
            }
            const marker = new window.google.maps.Marker({
                map,
                position,
                label: restaurant.name,
                title: restaurant.name,
                info: restaurant
            });
            
            marker.addListener(`click`, () => {
                infowindow.setContent(`<div id="info-window"></div>`);
                infowindow.open(map, marker);
            })
            
        })
    }

    render() {
        const mapProps = {
            options: {
                center: {
                    lat: this.props.restaurants[0].location.latitude,
                    lng: this.props.restaurants[0].location.longitude
                },
                zoom: 12
            },
            onMount: this.addMarkers
        }
        return (
            <div className="search-container container">
                <div className="restaurant-list-view">
                    <div className="restaurant-list-wrapper">
                        <RestaurantList restaurants={this.props.restaurants} />
                    </div>
                </div>
                <div className="restaurant-map-view">
                    <Map {...mapProps} />
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

export default connect(mapStatetoProps)(Search)
