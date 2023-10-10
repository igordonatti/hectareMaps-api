import { Module } from '@nestjs/common';
import { ImagesController } from './images.controller';
import { PrismaService } from 'src/databases/prisma.service';
import { ImagesService } from './images.service';

@Module({
  controllers: [ImagesController],
  providers: [PrismaService, ImagesService],
  exports: [ImagesService],
})
export class ImagesModule {}
