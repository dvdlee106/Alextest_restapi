import { Application } from "express";
import { createExpressServer } from "routing-controllers";
import { CarController } from "../controllers/car.controller";

export const ExpressServerLoader = (): Application => {
  const app: Application = createExpressServer({
    cors: true,
    classTransformer: true,
    defaultErrorHandler: false,
    middlewares: [],
    controllers: [CarController],
  });

  app.listen(process.env.PORT);

  return app;
};
