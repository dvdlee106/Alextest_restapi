import 'dotenv/config';
import "reflect-metadata";

import * as loaders from "./loaders";

const init =async (): Promise<void> => {
  await loaders.DatabaseConnectionLoader();
  loaders.ExpressServerLoader();

  console.log(`[server] ${ process.env.NODE_ENV } API Server is running on port: ${ process.env.PORT }`);
}

init();