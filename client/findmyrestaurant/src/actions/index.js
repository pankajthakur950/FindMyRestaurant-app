import { SIGN_IN, SIGN_UP, SIGN_UP_ERROR } from 'actions/types';
import postData from "api";
import { SIGN_UP_USER } from "api/queries";

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