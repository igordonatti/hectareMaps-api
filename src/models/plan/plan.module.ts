import { Module } from '@nestjs/common';
import { PlanController } from './plan.controller';
import { PlanService } from './plan.service';
import { PrismaService } from 'src/databases/prisma.service';

@Module({
  controllers: [PlanController],
  providers: [PlanService, PrismaService],
  exports: [PlanService],
})
export class PlanModule {}
