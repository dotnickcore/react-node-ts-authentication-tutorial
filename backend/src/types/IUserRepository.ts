import { CreateUserDto } from "../models/users/CreateUserDto";
import { User } from "../models/users/User";

export interface IUserRepository {
    create(user: CreateUserDto): Promise<User>;
}