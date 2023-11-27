import {
  Controller,
  UseInterceptors,
  UploadedFile,
  Post,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ImagesService } from './images.service';
import { isPublic } from '../auth/decorators/is-public.decorator';

@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @isPublic()
  @Post('upload')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: '../uploadedFiles',
      }),
    }),
  )
  async uploadImage(@UploadedFile() file: Express.Multer.File) {
    this.imagesService.createImage(file);
  }
}
