import { AuthUser } from "../models/users/AuthUser";
import { CreateAuthUserDto } from "../models/users/CreateAuthUserDto";

export interface IAuthRepository {
    create(authUser: CreateAuthUserDto): Promise<AuthUser>;
}