import { Module } from '@nestjs/common';
import { PlanController } from 'src/controllers/plan.controller';
import { PlanService } from 'src/services/plan.service';
import { PrismaService } from 'src/databases/prisma.service';

@Module({
  controllers: [PlanController],
  providers: [PlanService, PrismaService],
  exports: [PlanService],
})
export class PlanModule {}
