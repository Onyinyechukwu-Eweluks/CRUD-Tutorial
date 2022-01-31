import express from "express";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import { connection } from "./db";
import { schema } from "./graphqlSchema";

const app = express();

//middlewares
app.use(express.json());
app.use(cors());
connection().catch((error) => console.log("error: ", error));

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(3001, () => console.log("Server running on port 3001"));
