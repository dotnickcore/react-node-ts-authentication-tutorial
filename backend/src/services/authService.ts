import { AuthUser } from "../models/users/AuthUser";
import { CreateAuthUserDto } from "../models/users/CreateAuthUserDto";
import { AuthRepository } from "../respositories/authRepository";
import { IAuthRepository } from "../types/IAuthRepository";

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

    return await this.authRepository.create(newAuthUser);
  }

  public async doesEmailExist(email: string) {
    return await this.authRepository.doesEmailExist(email);
  }

  public async signIn(requestBody: any) {}
}

export const authService = new AuthService(new AuthRepository());