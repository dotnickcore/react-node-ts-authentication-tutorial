import express from 'express';
import asyncWrapper from '../../../utils/asyncWrapper';
import { authController } from '../../controllers/authController';

const authRoute = express.Router();

authRoute.post('/signup', asyncWrapper(authController.signUp));
authRoute.post('/sign-in', asyncWrapper(authController.signIn));
authRoute.get('/me', asyncWrapper(authController.getCurrentUser));
authRoute.post('/logout', asyncWrapper(authController.logout));

export default authRoute;
