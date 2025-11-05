import express from 'express';
import { authController } from '../controllers/authController';
import asyncWrapper from '../../utils/asyncWrapper';

const authRoute = express.Router();

authRoute.post('/signup', asyncWrapper(authController.signUp));
authRoute.post('/sign-in', asyncWrapper(authController.signIn));
authRoute.get('/me', asyncWrapper(authController.getCurrentUser));
authRoute.post('/logout', asyncWrapper(authController.logout));

export default authRoute;
