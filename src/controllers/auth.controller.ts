import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { AuthMiddleware } from 'src/middlewares/auth.middleware';
import { AuthService } from 'src/services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly AuthService: AuthService) {}

  @Get('validate-token/:token')
  @UseGuards(AuthMiddleware)
  async validateToken(@Param('token') token: string, @Res() res: Response) {
    try {
      if (!token) return res.status(401).send({ isValid: false });

      const isValid = await this.AuthService.isValidToken(token);
      return res.status(200).send({ isValid });
    } catch (error) {
      throw new HttpException(
        'AuthController.validateToken: ' + error,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
