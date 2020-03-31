const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString } = graphql;
const UserType = require('./user_type');
const RestaurantListType = require('./restaurant_list_type');
const RestaurantType = require('./restaurant_type');

const RestaurantService = require('../../services/RestaurantService');


const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return { email: "pankajthakur950@gmail.com" };
      }
    },
    restaurantList: {
      type: RestaurantListType,
      async resolve(parentValue, args) {
        return await RestaurantService.getAllRestaurants().catch(error => {
          throw new Error(error);
        });
      }
    },
    restaurant: {
      type: RestaurantType,
      args: { id: { type: GraphQLString } },
      async resolve(parentValue, args) {
        return await RestaurantService.getRestaurant(args.id).catch(error => {
          throw new Error(error);
        });
      }
    }
  }
});

module.exports = RootQueryType;
