import { Module } from '@nestjs/common';
import { RegisterController } from 'src/controllers/register.controller';
import { PrismaService } from 'src/databases/prisma.service';
import { RegisterService } from 'src/services/register.service';
import { UserService } from 'src/services/user.service';
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
