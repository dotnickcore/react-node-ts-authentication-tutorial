import pool from "../db";
import { AuthUser } from "../models/users/AuthUser";
import { IAuthRepository } from "../types/IAuthRepository";

export class AuthRepository implements IAuthRepository {
  async getUserByEmail(email: string): Promise<AuthUser> {
    const result = await pool.query(
      `SELECT * 
      FROM users 
      WHERE email = $1`,
    [email])

    return AuthUser.fromDatabase(result.rows[0]);
  }

  async doesEmailExist(email: string): Promise<boolean> {
    const result = await pool.query(
      `SELECT email 
      FROM users 
      WHERE email = $1`,
    [email])

    return result.rowCount != 0;
  }

  async create(newUser: AuthUser): Promise<AuthUser> {
    const result = await pool.query(
      `INSERT INTO users (given_name, surname, email, password_hash) 
       VALUES ($1, $2, $3, $4) 
       RETURNING *`,
      [newUser.given_name, newUser.surname, newUser.email, newUser.password_hash]
    );

    return AuthUser.fromDatabase(result.rows[0]);
  }

  async findById(id: string): Promise<any> {
    // Implementation
    return null;
  }
}
