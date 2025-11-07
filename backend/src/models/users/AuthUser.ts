export class AuthUser {
  public readonly id: string;
  public readonly given_name: string;
  public readonly surname: string;
  public readonly email: string;
  public readonly password_hash: string;
  public readonly created_at: Date;
  public readonly updated_at: Date;

  private constructor(
    id: string,
    email: string,
    given_name: string,
    surname: string,
    passwordHash: string,
    createdAt: Date,
    updatedAt: Date
  ) {
    this.id = id;
    this.email = email;
    this.given_name = given_name;
    this.surname = surname;
    this.password_hash = passwordHash;
    this.created_at = createdAt;
    this.updated_at = updatedAt;
  }
}
