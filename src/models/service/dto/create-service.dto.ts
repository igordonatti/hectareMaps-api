import { IsInt, IsString } from 'class-validator';
import { Service } from '../entities/service.entity';

export class CreateServiceDTO extends Service {
  @IsString()
  name: string;

  @IsInt()
  flightId: number;
}
