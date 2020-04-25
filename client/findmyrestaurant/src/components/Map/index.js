import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import config from 'config/keys';

class MapContainer extends React.Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedRestaurant: {},
    };
    onMarkerClick = (props, marker) => {
        this.setState({
            activeMarker: marker,
            showingInfoWindow: true,
            selectedRestaurant: props.restaurant
        });
    }
    renderRestaurantMarker() {
        return this.props.restaurants.map((restaurant, index) => {
            const position = {
                lat: restaurant.location.latitude,
                lng: restaurant.location.longitude
            }
            return (
                <Marker
                    onClick={this.onMarkerClick}
                    key={index}
                    title={restaurant.name}
                    name={restaurant.name}
                    restaurant={restaurant}
                    scaledSize={new window.google.maps.Size(10, 10)}
                    animation={this.props.highlightRestaurant === restaurant ? window.google.maps.Animation.BOUNCE : ''}
                    position={position} />

            );
        });
    }
    mapBoundChanged = (mapProps, map)=>{
        console.log(mapProps);
        this.props.searchRestaurants(map.getBounds());
    }
    render() {
        return (
            <Map google={this.props.google}
                initialCenter={this.props.options.center}
                onDragend={this.mapBoundChanged}
                zoom={this.props.options.zoom}>
                {
                    this.renderRestaurantMarker()
                }
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}>
                    <div>
                        <h1>{this.state.selectedRestaurant.name}</h1>
                    </div>
                </InfoWindow>

            </Map>
        );
    }
}
export default GoogleApiWrapper({
    apiKey: config.GOOGLE_API
})(MapContainer)
