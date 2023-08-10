import {
  Controller,
  Get,
  Res,
  HttpException,
  HttpStatus,
  Delete,
  Post,
  Body,
} from '@nestjs/common';
import { Response } from 'express';
import { PlanDto } from 'src/dtos/plan.dto';
import { PlanService } from 'src/services/plan.service';

@Controller('plan')
export class PlanController {
  constructor(private readonly planService: PlanService) {}

  @Get('list')
  async getList(@Res() res: Response) {
    try {
      res.status(200).send(this.planService.getList());
    } catch (error) {
      throw new HttpException(
        'PlanController.getList: ' + error,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  } // getList()

  @Get('fullList')
  async getFullList(@Res() res: Response) {
    try {
      res.status(200).send(this.planService.getFullList());
    } catch (error) {
      throw new HttpException(
        'PlanController.getFullList: ' + error,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  } // getFullList()

  @Post('createPlan')
  async createPlan(@Body() body: PlanDto, @Res() res: Response) {
    try {
      res.status(200).send(this.planService.create(body));
    } catch (error) {
      throw new HttpException(
        'PlanController.createPlan' + error,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  } // createPlan()

  @Delete('deletePlan')
  async deletePlan(@Body() body: PlanDto, @Res() res: Response) {
    try {
      res.status(200).send(this.planService.delete(body));
    } catch (error) {
      throw new HttpException(
        'PlanController.deletePlan: ' + error,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  } // deletePlan()

  @Post('updatePlan')
  async updatePlan(@Body() body: PlanDto, @Res() res: Response) {
    try {
      res.status(200).send(this.planService.update(body));
    } catch (error) {
      throw new HttpException(
        'PlanController.updatePlan: ' + error,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  } // updatePlan()
} // class
