const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString } = graphql;

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        email: {type: GraphQLString},
        firstName: {type: GraphQLString},
        lastName: {type: GraphQLString},
        imageUrl: {type: GraphQLString},
        dateOfBirth: {type: GraphQLString},
        token: {type: GraphQLString}
    }
});

module.exports = UserType;