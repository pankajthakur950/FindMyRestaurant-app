const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLInt } = graphql;
const LocationType = require("./location_type");

const RestaurantType = new GraphQLObjectType({
    name: 'Restaurant',
    fields: {
        _id: {type: GraphQLString},
        name: {type: GraphQLString},
        cuisines: {type: GraphQLString},
        timings: {type: GraphQLString},
        average_rating: {type: GraphQLInt},
        all_reviews_count: {type: GraphQLInt},
        image_url: {type: GraphQLString},
        location: {type: LocationType}
    }
});

module.exports = RestaurantType;