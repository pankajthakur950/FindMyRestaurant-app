import {
    FETCH_RESTAURANTS,
    SIGN_UP,
    SIGN_UP_ERROR,
    SIGN_IN,
    FETCH_RESTAURANT_DETAILS,
    UPDATE_RESTAURANT_REVIEW
} from 'actions/types';
import postData from "api";
import {
    SIGNUP_MUTATION,
    FETCHRESTAURANTS_QUERY,
    FETCHRESTAURANTDETAILS_QUERY,
    SIGNIN_MUTATION,
    ADDREVIEW_MUTATION
} from "api/queries";

export const signUpUser = user => async dispatch => {
    const signupMutation = SIGNUP_MUTATION(user);
    try {
        const response = await postData(signupMutation);
        let type = SIGN_UP, payload = null;
        if (response.errors) {
            type = SIGN_UP_ERROR;
            payload = response.errors[0].message;
        } else {
            console.log(response.data);
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

export const signInUser = user => async dispatch => {
    return new Promise(function (resolve, reject) {
        const signinMutation = SIGNIN_MUTATION(user);
        postData(signinMutation).then(response => {
            if (response.errors) {
                reject(response.errors[0]);
            } else {
                console.log(response.data);
                const user = {...response.data.signin};
                dispatch({
                    type: SIGN_IN,
                    payload: user
                });
                resolve(true);
            }
        }).catch(error => {
            console.log("in error...");
            throw error;
        })
    });
};

export const fetchRestaurants = () => async dispatch => {
    try {
        const response = await postData(FETCHRESTAURANTS_QUERY);
        console.log(response.data);
        dispatch({
            type: FETCH_RESTAURANTS,
            payload: response.data.restaurantList
        });
    } catch (error) {
        throw error;
    }
};

export const fetchRestaurantDetails = (id) => async dispatch => {

    const fetchRestaurantDetailsQuery = FETCHRESTAURANTDETAILS_QUERY(id);
    try {
        const response = await postData(fetchRestaurantDetailsQuery);
        dispatch({
            type: FETCH_RESTAURANT_DETAILS,
            payload: response.data.restaurant
        });
    } catch (error) {
        throw error;
    }
};

export const addReview = review => async dispatch => {
    return new Promise(function (resolve, reject) {
        const addReviewMutation = ADDREVIEW_MUTATION(review);
        postData(addReviewMutation).then(response => {
            if (response.errors) {
                reject(response.errors[0]);
            } else {
                const review = {...response.data.addReview};
                dispatch({
                    type: UPDATE_RESTAURANT_REVIEW,
                    payload: review
                });
                resolve(true);
            }
        }).catch(error => {
            console.log("in error...");
            throw error;
        })
    });
};