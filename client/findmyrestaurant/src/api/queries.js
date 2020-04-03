export const SIGN_UP_USER = ({ email, password, firstName, lastName, dateOfBirth }) =>
    `
    mutation{
        signup(email: "${email}", password:"${password}"){
            email,
            token
        }
    }`;

export const FETCH_RESTAURANT = `{
                                    restaurantList{
                                        results_found
                                        restaurants{
                                            _id
                                            name
                                            cuisines
                                            average_rating
                                            all_reviews_count
                                            image_url
                                            location{
                                                address
                                                city
                                                zipcode
                                                latitude
                                                longitude
                                            }
                                        }
                                    }
                                }`;

