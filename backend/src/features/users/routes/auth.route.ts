import express from 'express';
import { authController } from '../controllers/auth.controller';
import asyncWrapper from '../../../globals/cores/asyncWrapper.core';

const authRoute = express.Router();

authRoute.post('/signup', asyncWrapper(authController.signUp));
authRoute.post('/sign-in', asyncWrapper(authController.signIn));
authRoute.get('/me', asyncWrapper(authController.getCurrentUser));
authRoute.post('/logout', asyncWrapper(authController.logout));

export default authRoute;
