import {
  Controller,
  Get,
  Res,
  HttpException,
  HttpStatus,
  Param,
  Delete,
  Post,
  Body,
} from '@nestjs/common';
import { UserService } from 'src/services/user.service';
import { Response } from 'express';
import { UserDto } from 'src/dtos/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('all')
  async getAll(@Res() res: Response) {
    try {
      res.status(200).send(await this.userService.getAll());
    } catch (error) {
      throw new HttpException(
        'UserController.getAll: ' + error,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  } // getAll()

  @Get(':id')
  async getUserData(@Param('id') id: number, @Res() res: Response) {
    try {
      const row = await this.userService.findById(id);
      res.status(200).send(row);
    } catch (error) {
      throw new HttpException(
        'UserController.getUserData: ' + error,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  } // getUserData()

  @Delete(':id')
  async delete(@Param('id') id: number, @Res() res: Response) {
    try {
      if (!id)
        throw new Error('A identificação do usuário deve ser informada.');
      res.status(200).send(await this.userService.delete(id));
    } catch (error) {
      throw new HttpException(
        'UserController.delete: ' + error,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  } // delete()

  @Post('createUser')
  async createUser(@Body() body: UserDto, @Res() res: Response) {
    try {
      res.status(200).send(await this.userService.create(body));
    } catch (error) {
      throw new HttpException(
        'UserController.create: ' + error,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  } // createUser()

  @Post('updateUser')
  async updateUser(@Body() body: UserDto, @Res() res: Response) {
    try {
      res.status(200).send(await this.userService.update(body));
    } catch (error) {
      throw new HttpException(
        'UserController.updateUser: ' + error,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  } // updateUser()

  @Post('registrationUpdate')
  async registrationUpdate(@Body() body: UserDto, @Res() res: Response) {
    try {
      res.status(200).send(await this.userService.registrationUpdate(body));
    } catch (error) {
      throw new HttpException(
        'UserController.registrationUpdate: ' + error,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  } // registrationUpdate()

  @Post('emailUpdate')
  async emailUpdate(@Body() body: UserDto, @Res() res: Response) {
    try {
      res.status(200).send(await this.userService.registrationUpdate(body));
    } catch (error) {
      throw new HttpException(
        'UserController.emailUpdate: ' + error,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  } // emailUpdate()

  @Post('passwordUpdate')
  async passwordUpdate(@Body() body: UserDto, @Res() res: Response) {
    try {
      res.status(200).send(await this.userService.registrationUpdate(body));
    } catch (error) {
      throw new HttpException(
        'UserController.passwordUpdate: ' + error,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  } // passwordUpdate()
}
