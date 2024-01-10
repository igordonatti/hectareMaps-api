import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDTO } from './dto/create-project.dto';
import { DeleteProjectDTO } from './dto/delete-project.dto';

@Controller('project')
export class ProjectControler {
  constructor(private readonly projectService: ProjectService) {}

  @Post('create')
  create(@Body() createProjectDTO: CreateProjectDTO) {
    return this.projectService.create(createProjectDTO);
  }

  @Get('userProjects/:idUser')
  projetcsFromUser(@Param('idUser') idUser: number) {
    return this.projectService.getAllByUser(idUser);
  }

  @Post('delete')
  deleteProject(@Body() deleteProjectDTO: DeleteProjectDTO) {
    return this.projectService.deleteProject(deleteProjectDTO);
  }
}
