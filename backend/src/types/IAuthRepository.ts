import { AuthUser } from "../models/users/AuthUser";

export interface IAuthRepository {
    create(authUser: AuthUser): Promise<AuthUser>;
}