import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/databases/prisma.service';

@Injectable()
export class ServiceService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllByFlight(flightId: number) {
    const response = await this.prisma.service.findMany({
      where: {
        flights: {
          some: {
            id: flightId,
          },
        },
      },
    });

    return response;
  }
}
