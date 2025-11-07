export class AuthUser {
  private constructor(
    public readonly id: string,
    public readonly given_name: string,
    public readonly surname: string,
    public readonly email: string,
    public readonly password_hash: string,
    public readonly created_at: Date,
    public readonly updated_at: Date
  ) {}

  static fromDatabase(data: any): AuthUser {
    // Transform database snake_case to camelCase
    // Convert string dates to Date objects
    return new AuthUser(
      data.id,
      data.given_name,
      data.surname,
      data.email,
      data.password_hash, // database column name
      new Date(data.created_at), // string → Date
      new Date(data.updated_at) // string → Date
    );
  }
}
