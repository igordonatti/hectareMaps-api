import { Injectable } from '@nestjs/common';
import { TokenUtil } from 'src/utils/token.util';

@Injectable()
export class AuthService {
  constructor(private readonly TokenUtil: TokenUtil) {}

  async isValidToken(token: string) {
    try {
      const user = await this.TokenUtil.decodeToken(token);
      console.log(user);
      return { isValid: Boolean(user.id_user), message: 'ok' };
    } catch (error) {
      return { isValid: false, message: error.message };
    }
  }
}
