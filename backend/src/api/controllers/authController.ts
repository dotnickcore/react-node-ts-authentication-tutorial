import { Request, Response } from 'express';
import { authService } from '../../services/authService';
import { CreateAuthUserDto } from '../../models/users/CreateAuthUserDto';
import bcrypt from 'bcrypt';

class AuthController {
  public async signUp(req: Request, res: Response) {
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

    const newUser: CreateAuthUserDto = {
      given_name: req.body.given_name,
      surname: req.body.surname,
      email: req.body.email,
      password: hashedPassword
    }
    
    await authService.signUp(newUser);
  }
  
  public async signIn(req: Request, res: Response) {}

  public async getCurrentUser(req: Request, res: Response) {}

  public async logout(req: Request, res: Response) {}
}

export const authController: AuthController = new AuthController();