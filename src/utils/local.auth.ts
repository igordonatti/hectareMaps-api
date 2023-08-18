import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { RegisterService } from 'src/services/register.service';
import { SignIn } from 'src/dtos/signIn.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: RegisterService) {
    super();
  }

  async validate({ email, password }: SignIn) {
    const user = await this.authService.signIn({ email, password });
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
