import { Body, Controller, Post } from '@nestjs/common';
import { FlightService } from './flight.service';
import { CreateFlightDTO } from './dto/create-flight';

@Controller('flight')
export class FlightController {
  constructor(private readonly flightService: FlightService) {}

  @Post()
  create(@Body() createFlightDTO: CreateFlightDTO) {
    return this.flightService.createFlight(createFlightDTO);
  }
}
