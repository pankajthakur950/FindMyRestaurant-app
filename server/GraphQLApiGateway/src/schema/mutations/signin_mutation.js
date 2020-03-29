const graphql = require("graphql");
const { GraphQLString } = graphql;
const UserType = require("../types/user_type");

const signinMutation = {
  type: UserType,
  args: {
    email: { type: GraphQLString },
    password: { type: GraphQLString }
  },
  resolve(parentValue, { email, password }, req) {
    //return AuthService.login({ email, password, req });
  }
};

module.exports = signinMutation;
