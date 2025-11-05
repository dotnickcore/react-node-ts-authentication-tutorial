import express from 'express';
import asyncWrapper from '../../../utils/asyncWrapper';
import { userController } from '../../controllers/userController';

const userRoutes = express.Router();

userRoutes.post('/create-user', asyncWrapper(userController.createUser));

export default userRoutes;
