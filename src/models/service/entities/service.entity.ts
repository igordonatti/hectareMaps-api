import { Flight } from 'src/models/flight/entities/flght.entity';
import { ServicesEnum } from '../enum/service.enum';

export class Service {
  id: number;
  name: Enumerator<ServicesEnum>;
  flights: Array<Flight>;
  created: Date;
  status: string;
}
