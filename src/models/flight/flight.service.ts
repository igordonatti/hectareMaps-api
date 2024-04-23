import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/databases/prisma.service';
import { CreateFlightDTO } from './dto/create-flight';
import { DeleteFlightDTO } from './dto/delete-flight';

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

  async getAllFromProjectId(idProject: number) {
    const result = await this.prisma.flight.findMany({
      where: {
        projectId: idProject,
      },
    });

    return result;
  }

  async delete(deleteFlightDTO: DeleteFlightDTO) {
    const result = await this.prisma.flight.delete({
      where: {
        id: deleteFlightDTO.idFlight,
      },
    });

    return result;
  }
}
