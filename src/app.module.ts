import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PlanModule } from './models/plan/plan.module';
import { ConfigureModule } from './models/config/configure.module';
import { ImagesModule } from './models/images/images.module';
import { AuthModule } from './models/auth/auth.module';
import { UserModule } from './models/user/user.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './models/auth/guards/jwt-auth.guard';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    UserModule,
    PlanModule,
    ConfigureModule,
    ImagesModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
