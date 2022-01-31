import { GraphQLID, GraphQLNonNull, GraphQLString } from "graphql";
import { Users } from "../../dbEntities/users";
import { UserType } from "../typeDefinetions/Users";
import * as bcrypt from "bcrypt";

export const CREATE_USERS = {
  type: UserType,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    username: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
  },
  async resolve(parent: any, args: any) {
    const { name, username, password } = args;
    return bcrypt.hash(password, 10).then((hash) => {
      let user = Users.create({ name, username, password: hash });
      return user.save();
    });
  },
};

export const DELETE_USER = {
  type: UserType,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(parent: any, args: any) {
    const { id } = args;
    let deletedUser = await Users.delete({ id: id });
    return "Success";
  },
};

export const UPDATE_USER = {
  type: UserType,
  args: {
    id: { type: GraphQLID },
    name: { type: new GraphQLNonNull(GraphQLString) },
    username: { type: new GraphQLNonNull(GraphQLString) },
  },
  async resolve(parent: any, args: any) {
    const { id, name, username } = args;
    const user = await Users.update(
      { id: id },
      {
        name: name,
        username: username,
      }
    );
    return user;
  },
};

export const UPDATE_PASSWORD = {
  type: UserType,
  args: {
    username: { type: GraphQLString },
    oldPassword: { type: GraphQLString },
    newPassword: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { username, oldPassword, newPassword } = args;
    let user = await Users.findOne({ username: username });
    const userPassword = user?.password;

    if (oldPassword === userPassword) {
      await Users.update(
        { username: username },
        {
          username: username,
          password: newPassword,
        }
      );
    } else {
      throw new Error("PASSWORD DOES NOT MATCH");
    }
  },
};
