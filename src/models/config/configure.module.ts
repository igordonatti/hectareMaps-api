import { Module } from '@nestjs/common';
import { PrismaService } from 'src/databases/prisma.service';
import { ConfigureController } from './configure.controller';
import { ConfigureService } from './configure.service';

@Module({
  controllers: [ConfigureController],
  providers: [PrismaService, ConfigureService],
  exports: [ConfigureService],
})
export class ConfigureModule {}
