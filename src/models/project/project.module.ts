import { Module } from '@nestjs/common';
import { ProjectControler } from './project.controller';
import { ProjectService } from './project.service';
import { PrismaService } from 'src/databases/prisma.service';

@Module({
  controllers: [ProjectControler],
  providers: [ProjectService, PrismaService],
  exports: [ProjectService],
})
export class ProjectModule {}
