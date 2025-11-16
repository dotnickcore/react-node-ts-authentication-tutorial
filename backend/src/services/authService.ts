import { AuthUser } from "../models/users/AuthUser";
import { CreateAuthUserDto } from "../models/users/CreateAuthUserDto";
import { AuthRepository } from "../respositories/authRepository";
import { IAuthRepository } from "../types/IAuthRepository";
import { IJwtPayload } from "../types/IJwtPayload";
import { IJwtUserPayload } from "../types/IJwtUserPayload";
import { jwtUtils } from "../utils/jwt";

class AuthService {
  constructor(private authRepository: IAuthRepository) {}

  public async signUp(newUser: CreateAuthUserDto) {
    const newAuthUser: AuthUser = {
      id: "",
      given_name: newUser.given_name,
      surname: newUser.surname,
      email: newUser.email,
      password_hash: newUser.password,
      created_at: new Date(),
      updated_at: new Date()
    }

    const result = await this.authRepository.create(newAuthUser);

    const newJwtPayload: IJwtPayload = {
      id: result.id,
      given_name: result.given_name,
      surname: result.surname
    }
    
    const token = await jwtUtils.generateToken(newJwtPayload);

    const newJwtUserPayload: IJwtUserPayload = {
      id: result.id,
      given_name: result.given_name,
      surname: result.surname,
      email: result.email
    }

    return {
      accessToken: token,
      result: newJwtUserPayload
    }
  }

  public async doesEmailExist(email: string) {
    return await this.authRepository.doesEmailExist(email);
  }

  public async getUserByEmail(email: string) {
    const result = await this.authRepository.getUserByEmail(email);

    const newJwtPayload: IJwtPayload = {
      id: result.id,
      given_name: result.given_name,
      surname: result.surname
    }

    const token = await jwtUtils.generateToken(newJwtPayload);

    const newJwtUserPayload: IJwtUserPayload = {
      id: result.id,
      given_name: result.given_name,
      surname: result.surname,
      email: result.email
    }

    return {
      accessToken: token,
      result: newJwtUserPayload
    }
  }

  public async signIn(requestBody: any) {}
}

export const authService = new AuthService(new AuthRepository());