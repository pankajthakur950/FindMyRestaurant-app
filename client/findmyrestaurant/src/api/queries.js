export const SIGN_UP_USER = ({ email, password, firstName, lastName, dateOfBirth }) =>
    `
    mutation{
        signup(email: "${email}", password:"${password}"){
            email,
            token
        }
    }`;

