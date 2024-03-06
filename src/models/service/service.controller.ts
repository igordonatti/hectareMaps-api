import { Controller, Get, Param } from '@nestjs/common';
import { ServiceService } from './service.service';

@Controller('service')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @Get(':flightId')
  servicesFromFlight(@Param('flightId') flightId: number) {
    return this.serviceService.getAllByFlight(flightId);
  }
}
