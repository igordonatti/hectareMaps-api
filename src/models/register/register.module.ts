import { Module } from '@nestjs/common';
import { RegisterController } from './register.controller';
import { PrismaService } from 'src/databases/prisma.service';
import { RegisterService } from './register.service';
import { UserService } from '../user/user.service';
import { TokenUtil } from 'src/utils/token.util';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from 'src/utils/local.auth';

@Module({
  imports: [JwtModule, PassportModule],
  controllers: [RegisterController],
  providers: [
    RegisterService,
    PrismaService,
    UserService,
    TokenUtil,
    LocalStrategy,
  ],
  exports: [RegisterService],
})
export class RegisterModule {}
