import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/databases/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const result = await this.prisma.user.findFirst({
      where: { email: createUserDto.email },
    }); // Confirmando se não existe usuário já cadastrado com este email

    const date = new Date();

    if (!result || !result.id) {
      const data = {
        ...createUserDto,
        password: await bcrypt.hash(createUserDto.password, 10),
        createdAt: `${date}`,
      };

      const createdUser = await this.prisma.user.create({ data });

      return {
        ...createdUser,
        password: undefined,
        status: 200,
        message:
          'Pedido de registro realizado! Um link de confirmação foi enviado para o email informado. Em 48 horas ele irá expirar.',
      };
    } else {
      return {
        status: 422,
        message: 'Email já cadastrado',
      };
    }
  }

  async findByEmail(email: string) {
    return await this.prisma.user.findUnique({
      where: { email },
    });
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  async findByName(name: string) {
    return await this.prisma.user.findFirst({
      where: {
        name,
      },
    });
  }

  async findById(id: number) {
    return await this.prisma.user.findFirst({
      where: { id },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    return await this.prisma.user.delete({ where: { id } });
  }
}
