import { GraphQLList } from "graphql";
import { UserType } from "../typeDefinetions/Users";
import { Users } from "../../dbEntities/users";

export const GET_ALL_USERS = {
  type: new GraphQLList(UserType),
  async resolve(parent: any, args: any) {
    let allUsers = await Users.find();
    return allUsers;
  },
};
