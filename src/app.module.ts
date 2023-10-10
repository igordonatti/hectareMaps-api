import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './models/user/user.module';
import { PlanModule } from './models/plan/plan.module';
import { ConfigureModule } from './models/config/configure.module';
import { RegisterModule } from './models/register/register.module';
import { ImagesModule } from './models/images/images.module';
import { AuthModule } from './models/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    UserModule,
    PlanModule,
    ConfigureModule,
    RegisterModule,
    ImagesModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
