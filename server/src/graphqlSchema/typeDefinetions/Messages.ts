import { GraphQLBoolean, GraphQLObjectType, GraphQLString } from "graphql";

export const Messages = new GraphQLObjectType({
  name: "Message",
  fields: () => ({
    successful: { type: GraphQLBoolean },
    message: { type: GraphQLString },
  }),
});
