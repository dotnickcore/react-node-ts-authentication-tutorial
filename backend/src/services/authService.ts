class AuthService {
  public async signUp(requestBody: any) {
    console.log(requestBody);
  }

  public async signIn(requestBody: any) {}
}

export const authService: AuthService = new AuthService();
