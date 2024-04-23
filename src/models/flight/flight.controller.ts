import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { FlightService } from './flight.service';
import { CreateFlightDTO } from './dto/create-flight';
import { DeleteFlightDTO } from './dto/delete-flight';

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

  @Post('delete')
  deleteFlight(@Body() deleteFlightDTO: DeleteFlightDTO) {
    return this.flightService.delete(deleteFlightDTO);
  }
}
