import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
// import {AuditColumns} from "./entities/audit-columns"

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 5432,
  username: "root",
  password: "root",
  database: "Xdhp4",
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
});
