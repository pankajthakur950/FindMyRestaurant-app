import React from "react";
import { connect } from "react-redux";

import { fetchRestaurantDetails } from "actions";
import HeroDetail from "components/RestaurantDetail/HeroDetail";

import "components/RestaurantDetail/RestaurantDetail.scss";

class RestaurantList extends React.Component {
    componentDidMount() {
        this.props.fetchRestaurantDetails(this.props.match.params.restaurantId);
    }
    render() {
        if(!this.props.restaurant){
            return null;
        }
        const {image_url, name} = this.props.restaurant;
        return (
            <section className="restaurant-detail-section">
                <HeroDetail restaurant={this.props.restaurant}/>
                {this.props.restaurant.reviews.length}
            </section>
            
         )
    }
}

const mapStateToProps = ({ restaurant }) => {
    return { restaurant: restaurant.selectedRestaurant }
}

export default connect(mapStateToProps, { fetchRestaurantDetails })(RestaurantList);

