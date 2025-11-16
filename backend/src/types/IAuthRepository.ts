import { QueryResult } from "pg";
import { AuthUser } from "../models/users/AuthUser";

export interface IAuthRepository {
    // CREATE
    create(authUser: AuthUser): Promise<AuthUser>;

    // READ
    getUserByEmail(email: string): Promise<AuthUser>;
    doesEmailExist(email: string): Promise<boolean>;

}