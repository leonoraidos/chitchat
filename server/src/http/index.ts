import express, { Express } from 'express';
import cors from 'cors';

import router from '../routes';

export const createHttpServer = (): Express => {
  const app: Express = express();

  app.use(cors({ origin: ['http://localhost:3000'], credentials: true }));

  app.use(express.json());

  // Middleware

  // Room routes
  app.use('/room', router.room);

  return app;
};
