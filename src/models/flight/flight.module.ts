import { Module } from '@nestjs/common';
import { FlightController } from './flight.controller';
import { PrismaService } from 'src/databases/prisma.service';
import { FlightService } from './flight.service';

@Module({
  controllers: [FlightController],
  providers: [FlightService, PrismaService],
  exports: [FlightService],
})
export class FlightModule {}
