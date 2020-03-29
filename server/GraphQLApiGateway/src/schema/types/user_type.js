const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString } = graphql;

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        email: {type: GraphQLString},
        username: {type: GraphQLString},
        firstName: {type: GraphQLString},
        lastName: {type: GraphQLString},
        image_url: {type: GraphQLString},
        date_of_birth: {type: GraphQLString},
        token: {type: GraphQLString}
    }
});

module.exports = UserType;