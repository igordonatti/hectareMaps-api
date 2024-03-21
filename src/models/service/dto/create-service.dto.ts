import { IsInt, IsString } from 'class-validator';
import { Service } from '../entities/service.entity';
import { ServicesEnum } from '../enum/service.enum';

export class CreateServiceDTO extends Service {
  @IsString()
  serviceType: ServicesEnum;

  @IsInt()
  flightId: number;
}
