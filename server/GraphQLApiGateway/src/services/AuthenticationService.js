const axios = require('axios');

const signupUser = async user => {
    try {
        const response = await axios.post("http://localhost:4001/api/signup", user);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
        return Promise.reject(error);
    }

};

const signinUser = user => {

};

module.exports = {
    signupUser,
    signinUser
}