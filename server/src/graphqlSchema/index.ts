import { GraphQLObjectType, GraphQLSchema } from "graphql";
import {
  CREATE_USERS,
  DELETE_USER,
  UPDATE_PASSWORD,
  UPDATE_USER,
} from "./mutation/User";
import { GET_ALL_USERS } from "./queries/User";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllUsers: GET_ALL_USERS,
  },
});

const Mutations = new GraphQLObjectType({
  name: "Mutations",
  fields: {
    createUsers: CREATE_USERS,
    deleteUser: DELETE_USER,
    updateUser: UPDATE_USER,
    updatePassword: UPDATE_PASSWORD,
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutations,
});
