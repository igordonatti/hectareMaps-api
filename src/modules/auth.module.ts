import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthController } from 'src/controllers/auth.controller';
import { AuthService } from 'src/services/auth.service';
import { TokenUtil } from 'src/utils/token.util';

@Module({
  controllers: [AuthController],
  providers: [AuthService, TokenUtil, JwtService],
  exports: [AuthService],
})
export class AuthModule {}
