import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { customError } from 'src/helpers/customError';
import { UserService } from 'src/services/user.service';
import { TokenUtil } from 'src/utils/token.util';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(
    private readonly userService: UserService,
    private readonly tokenUtil: TokenUtil,
  ) {}

  async use(req: Request, res: Response) {
    const token = req.headers['x-access-token'][0];

    if (!token) return res.status(401).send(customError.auth.tokenNotProvided);

    try {
      const decodedToken = await this.tokenUtil.decodeToken(token);

      if (!decodedToken || !decodedToken.email)
        return res.status(401).send(customError.auth.accessDenied);
    } catch (error) {}
  }
}
