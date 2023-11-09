import { IsString, IsInt } from 'class-validator';
import { Project } from '../entities/project.entity';

export class CreateProjectDTO extends Project {
  @IsString()
  name: string;

  @IsInt()
  userId: number;
}
