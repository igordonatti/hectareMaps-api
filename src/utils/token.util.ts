import { JwtService } from '@nestjs/jwt';
import { UserDto } from 'src/dtos/user.dto';
import { Injectable } from '@nestjs/common';

interface DecodedToken {
  id_user: number;
  email: string;
}

@Injectable()
export class TokenUtil {
  constructor(private jwtService: JwtService) {}

  async tokenGenerate(payload: UserDto) {
    return {
      access_token: this.jwtService.sign(
        {
          email: payload.email,
        },
        {
          secret: process.env.JWT_SECRET,
          expiresIn: process.env.JWT_EXPIRES_IN,
        },
      ),
    };
  }

  async decodeToken(token: string) {
    try {
      const decoded: DecodedToken = this.jwtService.verify(token);
      return decoded;
    } catch (error) {
      throw new Error('Invalid Token');
    }
  }
}
