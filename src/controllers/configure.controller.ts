import {
  Controller,
  Res,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Body,
} from '@nestjs/common';
import { ConfigureService } from 'src/services/configure.service';
import { Response } from 'express';
import { helpers } from 'src/helpers';

@Controller('config')
export class ConfigureController {
  constructor(private readonly configService: ConfigureService) {}

  @Get('getData')
  async getData(@Res() res: Response) {
    try {
      res.status(200).send(await this.configService.getData());
    } catch (error) {
      throw new HttpException(
        'ConfigureController.getData: ' + error,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('getPublicData')
  async getPublicData(@Res() res: Response) {
    try {
      res.status(200).send(await this.configService.getPublicData());
    } catch (error) {
      throw new HttpException(
        'ConfigureController.getPublicData: ' + error,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post('setData')
  async setData(@Body() body: string, @Res() res: Response) {
    try {
      res.status(200).send(await this.configService.setData(body));
    } catch (error) {
      throw new HttpException(
        'ConfigureController.setData: ' + error,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  } // setData()

  @Get('get-helpers')
  async getHelpers(@Res() res: Response) {
    return res.status(helpers.httpStatusCode.OK).send(helpers.enumHelperExport);
  }
}
