import { Request, Response } from 'express';
import { authService } from '../../services/authService';
import { CreateAuthUserDto } from '../../models/users/CreateAuthUserDto';
import { HashAuthUserPassword } from '../../utils/hashAuthUserPassword';
import { userCreateSchema } from '../../validators/userValidator';
import { BadRequestException } from '../../utils/error';
import { SignInAuthUserDto } from '../../models/users/SignInAuthUserDto';

class AuthController {
  public async signUp(req: Request, res: Response) {
    const newUser: CreateAuthUserDto = {
      given_name: req.body.given_name,
      surname: req.body.surname,
      email: req.body.email,
      password: await HashAuthUserPassword(req.body.password),
    };

    const email = await authService.doesEmailExist(newUser.email);

    if (email) {
      throw new BadRequestException("An account with this email already exists")
    }

    const { error } = userCreateSchema.validate(newUser);

    if (error) {
      throw new BadRequestException(`Validation Failed: ${error.details.map((detail) => detail.message)}`)
    }

    const user = await authService.signUp(newUser);

    res.status(200).json({
      success: true,
      message: 'User created successfully',
      data: user,
    });
  }

  public async signIn(req: Request, res: Response) {
    const newUserSignIn: SignInAuthUserDto = {
      email: req.body.email,
      password: req.body.password
    };
  }

  public async getCurrentUser(req: Request, res: Response) {}

  public async logout(req: Request, res: Response) {}
}

export const authController: AuthController = new AuthController();
