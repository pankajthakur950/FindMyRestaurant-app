import { FETCH_RESTAURANTS, SIGN_UP, SIGN_UP_ERROR } from 'actions/types';
import postData from "api";
import { SIGN_UP_USER, FETCH_RESTAURANT } from "api/queries";

export const signUpUser = user => async dispatch => {
    const userMutation = SIGN_UP_USER(user);
    try {
        const response = await postData(userMutation);
        let type = SIGN_UP, payload = null;
        if (response.errors) {
            type = SIGN_UP_ERROR;
            payload = response.errors[0].message;
        } else {
            payload = response.data;
        }
        dispatch({
            type,
            payload
        });
    } catch (error) {
        throw error;
    }
};

export const fetchRestaurants = () => async dispatch => {
    try {
        const response = await postData(FETCH_RESTAURANT);
        console.log(response.data);
        dispatch({
            type: FETCH_RESTAURANTS,
            payload: response.data.restaurantList
        });
    } catch (error) {
        throw error;
    }
};