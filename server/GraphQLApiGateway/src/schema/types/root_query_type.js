const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString} = graphql;
const UserType = require('./user_type');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: {id: {type: GraphQLString}},
      resolve(parentValue, args) {
        return {email:"pankajthakur950@gmail.com"};
      }
    }
  }
});

module.exports = RootQueryType;
