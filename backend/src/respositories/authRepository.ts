import pool from "../db";
import { AuthUser } from "../models/users/AuthUser";
import { CreateAuthUserDto } from "../models/users/CreateAuthUserDto";
import { IAuthRepository } from "../types/IAuthRepository";

export class AuthRepository implements IAuthRepository {
  async create(newUser: AuthUser): Promise<AuthUser> {
    const result = await pool.query(query, values);

    return AuthUser.fromDatabase(result.rows[0]);
  }

  async findById(id: string): Promise<any> {
    // Implementation
    return null;
  }
}
