import { Request, Response } from 'express';
import { userService } from '../../services/userService';


class UserController {
  public async createUser(req: Request, res: Response) {
    await userService.createUser(req);
  }

}

export const userController: UserController = new UserController();