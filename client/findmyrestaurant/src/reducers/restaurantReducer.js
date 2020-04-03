import { FETCH_RESTAURANTS } from "actions/types";

const INITIAL_STATE = {
    restaurants: [],
    results_found: 0
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_RESTAURANTS:
            return { ...state, ...action.payload }
        default:
            return state;
    }
}