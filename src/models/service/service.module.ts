import { Module } from '@nestjs/common';
import { ServiceController } from './service.controller';
import { PrismaService } from 'src/databases/prisma.service';
import { ServiceService } from './service.service';

@Module({
  controllers: [ServiceController],
  providers: [ServiceService, PrismaService],
  exports: [ServiceService],
})
export class ServiceModule {}
