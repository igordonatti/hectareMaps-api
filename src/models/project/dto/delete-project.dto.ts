import { IsInt } from 'class-validator';
import { Project } from '../entities/project.entity';

export class DeleteProjectDTO extends Project {
  @IsInt()
  id: number;

  @IsInt()
  userId: number;
}
