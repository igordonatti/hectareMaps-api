import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TokenUtil } from 'src/utils/token.util';

@Module({
  controllers: [AuthController],
  providers: [AuthService, TokenUtil, JwtService],
  exports: [AuthService],
})
export class AuthModule {}
