const axios = require('axios');

const signupUser = async user => {
    try {
        const userObject = {user:{...user}};
        const response = await axios.post("http://localhost:4001/api/signup", userObject);
        return response.data;
    } catch (error) {
        console.log(error);
        return Promise.reject(error);
    }

};

const signinUser = async user => {
    console.log(user);
    try {
        const response = await axios.post("http://localhost:4001/api/signin", user);
        return response.data;
    } catch (error) {
        console.log(error);
        return Promise.reject(error);
    }
};

module.exports = {
    signupUser,
    signinUser
}