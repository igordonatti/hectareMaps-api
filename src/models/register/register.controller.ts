import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Res,
  Post,
} from '@nestjs/common';
import { RegisterService } from './register.service';
import { Response } from 'express';
import { SignIn } from 'src/dtos/signIn.dto';
import { UserDto } from 'src/dtos/user.dto';

@Controller('register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Post('signIn')
  async signIn(@Body() body: SignIn, @Res() res: Response) {
    try {
      res.status(200).send(await this.registerService.signIn(body));
    } catch (error) {
      throw new HttpException(
        'RegisterController.signIn: ' + error,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post('signUp')
  async signUp(@Body() body: UserDto, @Res() res: Response) {
    try {
      res.status(200).send(await this.registerService.signUp(body));
    } catch (error) {
      throw new HttpException(
        'RegisterController.signUp: ' + error,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
