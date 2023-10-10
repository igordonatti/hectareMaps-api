import {
  Controller,
  UseInterceptors,
  UploadedFile,
  Post,
  Res,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
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
    @Res() res: Response,
  ) {
    try {
      console.log(file);
      res.status(200).send(this.imagesService.createImage(file));
    } catch (error) {
      throw new HttpException(
        'imagesController.upload: ' + error,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
