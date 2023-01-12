import { AppDataSource } from "../database/data-source";
import { DataSource } from "typeorm";

export const DatabaseConnectionLoader =async (): Promise<DataSource> => {
  let connection: DataSource;
  try {
    await AppDataSource.initialize();
  } catch (error) {
    console.log(`Database Connection Error: ${ error }`);
  }
  console.log(`Database Connected`);
  return connection;
}