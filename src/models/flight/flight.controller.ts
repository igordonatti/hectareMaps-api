import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { FlightService } from './flight.service';
import { CreateFlightDTO } from './dto/create-flight';

@Controller('flight')
export class FlightController {
  constructor(private readonly flightService: FlightService) {}

  @Post()
  create(@Body() createFlightDTO: CreateFlightDTO) {
    return this.flightService.createFlight(createFlightDTO);
  }

  @Get('/:idProject')
  getAllFlightsFromProject(@Param('idProject') idProject: number) {
    return this.flightService.getAllFromProjectId(idProject);
  }
}
