import { FETCH_RESTAURANTS, FETCH_RESTAURANT_DETAILS } from "actions/types";

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
        default:
            return state;
    }
}