import { Application } from 'express';
import authRoute from './auth/authRoutes';

function appRoutes(app: Application) {
  app.use('/api/v1/auth', authRoute);
}

export default appRoutes;
