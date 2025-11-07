import { Request, Response } from 'express';
import { authService } from '../../services/authService';
import { CreateAuthUserDto } from '../../models/users/CreateAuthUserDto';
import { HashAuthUserPassword } from '../../utils/hashAuthUserPassword';

class AuthController {
  public async signUp(req: Request, res: Response) {
    const newUser: CreateAuthUserDto = {
      given_name: req.body.given_name,
      surname: req.body.surname,
      email: req.body.email,
      password: await HashAuthUserPassword(req.body.password)
    }
    
    const user = await authService.signUp(newUser);

    res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: user,
    });
  }
  
  public async signIn(req: Request, res: Response) {}

  public async getCurrentUser(req: Request, res: Response) {}

  public async logout(req: Request, res: Response) {}
}

export const authController: AuthController = new AuthController();