import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/databases/prisma.service';
import { CreateProjectDTO } from './dto/create-project.dto';
import { DeleteProjectDTO } from './dto/delete-project.dto';

@Injectable()
export class ProjectService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProject: CreateProjectDTO) {
    const user = await this.prisma.user.findFirst({
      where: { id: createProject.userId },
    });

    if (user) {
      const response = await this.prisma.project.create({
        data: {
          name: createProject.name,
          userId: user.id,
        },
      });

      return {
        ...response,
        status: 200,
        message: 'Projeto criado com sucesso!',
      };
    } else {
      return {
        status: 422,
        message: 'Usuário não encontrado!',
      };
    }
  }

  async getAllByUser(userId: number) {
    const response = await this.prisma.project.findMany({
      where: {
        userId,
      },
    });

    return response;
  }

  async deleteProject({ id, userId }: DeleteProjectDTO) {
    const response = await this.prisma.project.delete({
      where: {
        id,
        userId,
      },
    });

    return response;
  }
}
