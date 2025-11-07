import { QueryResult } from "pg";
import { AuthUser } from "../models/users/AuthUser";

export interface IAuthRepository {
    create(authUser: AuthUser): Promise<AuthUser>;
    doesEmailExist(email: string): Promise<boolean>;
}