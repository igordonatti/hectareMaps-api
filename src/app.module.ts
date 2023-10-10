import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './modules/user.module';
import { PlanModule } from './modules/plan.module';
import { ConfigureModule } from './modules/configure.module';
import { RegisterModule } from './modules/register.module';
import { ImagesModule } from './modules/images.module';
import { AuthModule } from './modules/auth.module';

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
