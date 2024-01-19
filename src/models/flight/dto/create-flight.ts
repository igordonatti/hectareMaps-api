import { IsInt } from 'class-validator';
import { Flight } from '../entities/flght.entity';

export class CreateFlightDTO extends Flight {
  @IsInt()
  projectId: number;
}
