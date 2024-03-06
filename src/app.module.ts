import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ConfigureModule } from './models/config/configure.module';
import { ImagesModule } from './models/images/images.module';
import { AuthModule } from './models/auth/auth.module';
import { UserModule } from './models/user/user.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './models/auth/guards/jwt-auth.guard';
import { ProjectModule } from './models/project/project.module';
import { FlightModule } from './models/flight/flight.module';
import { ServiceModule } from './models/service/service.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    UserModule,
    ConfigureModule,
    ImagesModule,
    AuthModule,
    ProjectModule,
    FlightModule,
    ServiceModule,
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
