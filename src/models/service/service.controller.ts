import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ServiceService } from './service.service';
import { CreateServiceDTO } from './dto/create-service.dto';

@Controller('service')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @Post('create')
  createService(@Body() data: CreateServiceDTO) {
    return this.serviceService.createService(data);
  }

  @Get(':flightId')
  servicesFromFlight(@Param('flightId') flightId: number) {
    return this.serviceService.getAllByFlight(flightId);
  }
}
