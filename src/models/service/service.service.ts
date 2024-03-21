import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/databases/prisma.service';
import { CreateServiceDTO } from './dto/create-service.dto';

@Injectable()
export class ServiceService {
  constructor(private readonly prisma: PrismaService) {}

  async createService(data: CreateServiceDTO) {
    const date = new Date();

    const response = await this.prisma.service.create({
      data: {
        serviceType: data.serviceType,
        created: date,
        status: 'CREATED',
        flight: {
          connect: {
            id: data.flightId,
          },
        },
      },
    });

    return response;
  }

  async getAllByFlight(flightId: number) {
    const response = await this.prisma.service.findMany({
      where: {
        flight: {
          every: {
            id: flightId,
          },
        },
      },
    });

    console.log(response);

    return response;
  }
}
