const graphql = require("graphql");
const { GraphQLString } = graphql;
const UserType = require("../types/user_type");
const AuthService = require("./../../services/AuthenticationService");

const signupMutation = {
  type: UserType,
  args: {
    email: { type: GraphQLString },
    password: { type: GraphQLString }
  },
  async resolve(parentValue, { email, password }) {
    return await AuthService.signupUser({ email, password }).catch(error=>{
        throw new Error(error);
    })
  }
};

module.exports = signupMutation;
