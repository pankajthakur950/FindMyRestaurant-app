import { FETCH_RESTAURANTS, FETCH_RESTAURANT_DETAILS, UPDATE_RESTAURANT_REVIEW } from "actions/types";

const INITIAL_STATE = {
    restaurants: [],
    results_found: 0,
    selectedRestaurant: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_RESTAURANTS:
            return { ...state, ...action.payload }
        case FETCH_RESTAURANT_DETAILS:
            return { ...state, selectedRestaurant: action.payload }
        case UPDATE_RESTAURANT_REVIEW:
            const selectedRestaurantReviews = [...state.selectedRestaurant.reviews, action.payload];
            const selectedRestaurant = {...state.selectedRestaurant, reviews: selectedRestaurantReviews};
            return {...state, selectedRestaurant};
        default:
            return state;
    }
}