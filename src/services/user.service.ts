import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/databases/prisma.service';
import { UserDto } from 'src/dtos/user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findById(id_user: number) {
    try {
      return await this.prisma.user.findFirst({
        where: {
          id: id_user,
        },
      });
    } catch (error) {
      throw new Error('UserService.findById: ' + error);
    }
  } // findById()

  async getAll() {
    try {
      return await this.prisma.user.findMany();
    } catch (error) {
      throw new Error('UserService.findAll: ' + error);
    }
  } // getAll()

  async delete(id: number) {
    try {
      const row = await this.prisma.user.delete({
        where: { id },
      });
      console.log(row);
    } catch (error) {
      throw new Error('UserService.delete: ' + error);
    }
  } // delete()

  async update(user: UserDto) {
    try {
      const row = await this.prisma.user.update({
        where: { id: user.id },
        data: {
          name: user.name,
          lastname: user.lastname,
          phone: user.phone,
          email: user.email,
          role: user.role,
          require_auth: new Date(),
          status: user.status,
        },
      });

      console.log(row);
    } catch (error) {
      throw new Error('UserService.update: ' + error);
    }
  } // update()

  async passwordUpdate(user: UserDto) {
    try {
      await this.prisma.user.update({
        where: { id: user.id },
        data: {
          password_hash: user.password,
        },
      });

      return {
        status: 200,
        message: 'Senha alterada com sucessoo.',
      };
    } catch (error) {
      throw new Error('UserService.passwordUpdate: ' + error);
    }
  } // passwordUppdate()

  async registrationUpdate(user: UserDto) {
    try {
      const row = await this.prisma.user.update({
        where: { email: user.email },
        data: {
          status: 'ACTIVE',
        },
      });

      console.log(row);
    } catch (error) {
      throw new Error('UserService.registrationUpdate: ' + error);
    }
  } // registrationUpdate()

  async create({ name, lastname, email, phone, password_hash, cpf }: UserDto) {
    try {
      this.prisma.user.create({
        data: {
          name,
          lastname,
          email,
          phone,
          password_hash,
          cpf,
          status: 'CREATED',
          role: 'USER',
        },
      });
    } catch (error) {
      throw new Error('UserService.create: ' + error);
    }
  } // create()
}
