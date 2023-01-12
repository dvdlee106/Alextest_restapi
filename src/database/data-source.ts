import "dotenv/config";
import { DataSource } from "typeorm";

const env = process.env.NODE_ENV || "development";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  synchronize: true,
  logging: false,
  migrationsTableName: "migrations",
  entities: [
    env === "production"
      ? "build/database/entities/*{.ts,.js}"
      : "src/database/entities/*{.ts,.js}",
  ],
  migrations: [
    env === "production"
      ? "build/database/migrations/*{.ts,.js}"
      : "src/database/migrations/*{.ts,.js}",
  ],
  subscribers: [
    env === "production"
      ? "build/database/subscribers/*{.ts,.js}"
      : "src/database/subscribers/*{.ts,.js}",
  ],
  migrationsRun: true,
});
