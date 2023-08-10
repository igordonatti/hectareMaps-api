import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './modules/user.module';
import { PlanModule } from './modules/plan.module';
import { ConfigureModule } from './modules/configure.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    UserModule,
    PlanModule,
    ConfigureModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
