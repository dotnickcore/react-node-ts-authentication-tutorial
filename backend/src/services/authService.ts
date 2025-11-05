import { CreateAuthUserDto } from "../models/users/CreateAuthUserDto";
import { AuthRepository } from "../respositories/authRepository";
import { IAuthRepository } from "../types/IAuthRepository";

class AuthService {
  constructor(private authRepository: IAuthRepository) {}

  public async signUp(newUser: CreateAuthUserDto) {

    return await this.authRepository.create(newUser);
  }

  public async signIn(requestBody: any) {}
}

export const authService = new AuthService(new AuthRepository());