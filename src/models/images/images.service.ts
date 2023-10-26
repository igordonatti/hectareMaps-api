import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/databases/prisma.service';
import { createReadStream, existsSync, mkdirSync, createWriteStream } from 'fs';
import * as path from 'path';
import { env } from 'process';

@Injectable()
export class ImagesService {
  constructor(private prisma: PrismaService) {}

  async createImage(file: Express.Multer.File) {
    try {
      // Definindo o caminho para o diretório de uploads
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

      // Salvando as informações da imagem no banco de dados usando o Prisma
      const savedImage = await this.prisma.image.create({
        data: {
          path: file.path,
          filename: file.originalname,
          mimetype: file.mimetype,
          flight: {
            connect: { id: 1 }, // Precisa alterar essa lógica para referenciar o voo correto
          },
        },
      });

      // Retornando o nome do arquivo salvo
      return savedImage.filename;
    } catch (error) {
      throw new Error('ImageService.createImage: ' + error);
    }
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
