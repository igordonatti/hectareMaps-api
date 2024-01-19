import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/databases/prisma.service';
import { CreateFlightDTO } from './dto/create-flight';

@Injectable()
export class FlightService {
  constructor(private prisma: PrismaService) {}

  async createFlight(createFlight: CreateFlightDTO) {
    const result = await this.prisma.flight.create({
      data: {
        date: new Date(),
        projectId: createFlight.projectId,
      },
    });

    return result;
  }
}
