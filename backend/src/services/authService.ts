import { AuthRepository } from "../respositories/authRepository";
import { IAuthRepository } from "../types/IAuthRepository";

class AuthService {
  constructor(private authRepository: IAuthRepository) {}

  public async signUp(requestBody: any) {
    console.log('Service: Creating user with data:', requestBody);
    return await this.authRepository.create(requestBody);
  }

  public async signIn(requestBody: any) {}
}

export const authService = new AuthService(new AuthRepository());