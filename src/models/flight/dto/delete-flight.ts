import { IsInt } from 'class-validator';

export class DeleteFlightDTO {
  @IsInt()
  idFlight: number;
}
