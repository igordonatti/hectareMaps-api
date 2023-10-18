import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/databases/prisma.service';
import { SignIn } from 'src/dtos/signIn.dto';
import { TokenUtil } from 'src/utils/token.util';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class RegisterService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UserService,
    private readonly tokenUtil: TokenUtil,
  ) {}

  async signUp(data: User) {
    try {
      const result = await this.prisma.user.findFirst({
        where: { email: data.email },
      });

      if (!result || !result.id) {
        await this.userService.create(data);
        return {
          status: 200,
          message:
            'Pedido de registro realizado! Um link de confirmação foi enviado para o email informado. Em 48 horas ele irá expirar.',
        };
      } else {
        return {
          status: 422,
          message: 'E-mail já cadastrado!',
        };
      }
    } catch (error) {
      throw new Error('RegisterService.signUp: ' + error);
    }
  } // signUp()

  /*
  async signIn(data: SignIn) {
    try {
      let emailValid = await this.prisma.user.findFirst({
        where: {
          email: data.email,
        },
      });

      if (!emailValid || !emailValid.name)
        return { status: 422, message: 'E-mail não encontrado!' };

      if (emailValid.status == 'NEW')
        return {
          status: 422,
          message:
            'Seu acesso ainda não foi autorizado! Confirme seu cadastro no link recebido por email.',
        };

      if (emailValid.status == 'BLOCKED')
        return {
          status: 422,
          message:
            'Por motivo de segurança seu usuário está bloqueado. Entre em contato conosco!',
        };

      if (emailValid.status == 'UPDATE')
        emailValid = await this.prisma.user.findFirst({
          where: { email: data.email, password_hash: data.password },
        });

      let user: UserDto;

      if (emailValid.status == 'UPDATE') {
        user = await this.prisma.user.findFirst({
          where: {
            email: data.email,
            password_hash: data.password,
          },
        });
      } else {
        user = await this.prisma.user.findFirst({
          where: {
            email: data.email,
            password_hash: data.password,
          },
        });
      }

      if (!user || !user.id) return { status: 422, message: 'Senha Incorreta' };

      await this.prisma.user.update({
        where: {
          email: user.email,
        },
        data: {
          require_auth: new Date(),
          access_At: new Date(),
        },
      });

      // tem de arrumar essa logica
      const token = await this.tokenUtil.tokenGenerate(user);

      return {
        status: 200,
        message: 'Acesso Autorizado',
        user: {
          id_user: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
          status: user.status,
          token: token,
        },
      };
    } catch (error) {
      throw new Error('RegisterService.signIn: ' + error);
    }
  } // signIn()
   */
}
