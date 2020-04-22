import { FETCH_RESTAURANTS, FETCH_RESTAURANT_DETAILS, UPDATE_RESTAURANT_REVIEW } from "actions/types";

const INITIAL_STATE = {
    restaurants: [],
    results_shown: 0,
    results_found: 0,
    selectedRestaurant: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_RESTAURANTS:
            return { ...state, 
                    results_shown: action.payload.results_shown, 
                    results_found: action.payload.results_found,
                    restaurants: [...state.restaurants, ...action.payload.restaurants] 
                }
        case FETCH_RESTAURANT_DETAILS:
            return { ...state, selectedRestaurant: action.payload }
        case UPDATE_RESTAURANT_REVIEW:
            const selectedRestaurantReviews = [...state.selectedRestaurant.reviews, action.payload];
            const selectedRestaurant = { ...state.selectedRestaurant, reviews: selectedRestaurantReviews };
            return { ...state, selectedRestaurant };
        default:
            return state;
    }
}