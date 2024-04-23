import {
  Controller,
  UseInterceptors,
  UploadedFile,
  Post,
  Get,
  Query,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ImagesService } from './images.service';

@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: '../uploadedFiles',
      }),
    }),
  )
  async uploadImage(
    @UploadedFile() file: Express.Multer.File,
    @Query('idFlight') idFlight: string,
  ) {
    return await this.imagesService.createImage(file, +idFlight);
  }

  // @Get('allImages')
  // async getImages(){
  //   this.imagesService.getImage();
  // }
}
