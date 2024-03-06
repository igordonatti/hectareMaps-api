import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/databases/prisma.service';
import { createReadStream, existsSync, mkdirSync, createWriteStream } from 'fs';
import * as path from 'path';
import { env } from 'process';
import { Express } from 'express';

@Injectable()
export class ImagesService {
  constructor(private prisma: PrismaService) {}

  async createImage(file: Express.Multer.File, idFlight: number) {
    const uploadPath = path.join(env.URL_IMAGE);
    const imagePath = path.join(uploadPath, `${file.originalname}`);

    // Verificando se o diretório de uploads existe e, se não, criando-o
    if (!existsSync(uploadPath)) {
      mkdirSync(uploadPath, { recursive: true });
    }

    // Lendo o arquivo de upload e escrevendo-o no sistema de arquivos
    const stream = createReadStream(file.path);
    const writeStream = createWriteStream(imagePath);
    stream.pipe(writeStream);

    const image = await this.prisma.image.create({
      data: {
        filename: file.originalname,
        path: file.path,
        mimetype: file.mimetype,
        flight: {
          connect: {
            id: idFlight,
          },
        },
      },
    });

    return {
      message: 'Arquivo salvo com sucesso!',
      status: 200,
      image,
    };
  } // createImage()

  async getImage(filename: string) {
    const image = await this.prisma.image.findFirst({
      where: {
        filename,
      },
    });

    if (!image) {
      throw new NotFoundException('Image not found');
    }

    const imagePath = path.join(env.URL_IMAGE, '/', image.filename);

    return {
      filename: image.filename,
      path: imagePath,
    };
  } // getImage
}
