import { IsString } from 'class-validator';
import { Service } from '../entities/service.entity';

export class CreateService extends Service {
  @IsString()
  name: Enumerator;
}
