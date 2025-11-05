import { UserRepository } from "../respositories/userRepository";
import { IUserRepository } from "../types/IUserRepository";

class UserService {
  constructor(private userRepository: IUserRepository) {}

  public async createUser(requestBody: any) {
    console.log('Creating user with data:', requestBody);
    return await this.userRepository.create(requestBody);
  }
}

// Instantiate with the actual repository
export const userService = new UserService(new UserRepository());