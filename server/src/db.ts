import { createConnection, Connection } from "typeorm";
import { Users } from "./dbEntities/users";

export const connection = async () =>
  await createConnection({
    type: "mysql",
    host: "localhost",
    username: "root",
    password: "p@33word",
    database: "cruddb",
    logging: true,
    synchronize: false,
    entities: [Users],
  });
