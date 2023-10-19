import { Injectable } from '@nestjs/common';
import { TokenUtil } from 'src/utils/token.util';

@Injectable()
export class AuthService {
  constructor(private readonly TokenUtil: TokenUtil) {}

  validateUser(email: string, password: string) {
    throw new Error('Method not implemented.');
  }

  async isValidToken(token: string) {
    try {
      const user = await this.TokenUtil.decodeToken(token);
      console.log(user);
      return { isValid: true, message: 'ok' };
    } catch (error) {
      return { isValid: false, message: error.message };
    }
  }
}
