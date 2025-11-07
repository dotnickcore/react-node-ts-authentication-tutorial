import { Request, Response } from 'express';
import { authService } from '../../services/authService';
import { CreateAuthUserDto } from '../../models/users/CreateAuthUserDto';

class AuthController {
  public async signUp(req: Request, res: Response) {
    
    
    const newUser: CreateAuthUserDto = {
      given_name: "Nicholas",
      surname: "Browning",
      email: "nicholas.browning@gmail.com",
      password: "12345678",
    }

    await authService.signUp(newUser);
  }
  
  public async signIn(req: Request, res: Response) {}

  public async getCurrentUser(req: Request, res: Response) {}

  public async logout(req: Request, res: Response) {}
}

export const authController: AuthController = new AuthController();