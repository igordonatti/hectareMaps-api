import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/databases/prisma.service';
import { PlanDto } from 'src/dtos/plan.dto';

@Injectable()
export class PlanService {
  constructor(private prisma: PrismaService) {}

  async getList() {
    try {
      return await this.prisma.plan.findMany();
    } catch (error) {
      throw new Error('PlanService.getList: ' + error);
    }
  } // getList()

  async getFullList() {
    try {
      return this.prisma.plan.findMany({
        where: { active: true },
      });
    } catch (error) {
      throw new Error('PlanService.getFullList: ' + error);
    }
  } // getFullList()

  async create({
    name,
    price,
    max_images,
    storage_space,
    observation,
    active,
    months_of_validity,
    site_emphasis,
  }: PlanDto) {
    try {
      const row = await this.prisma.plan.create({
        data: {
          name,
          price,
          max_images,
          storage_space,
          observation,
          active,
          months_of_validity,
          site_emphasis,
        },
      });

      return !row
        ? 'Cadastro realizado com sucesso'
        : 'Não foi possível concluir o registro';
    } catch (error) {
      throw new Error('PlanService.create: ' + error);
    }
  } // create()

  async delete(plan: PlanDto) {
    try {
      const row = await this.prisma.plan.delete({
        where: {
          id: plan.id,
        },
      });

      return !row
        ? 'Exclusão realizada com sucesso'
        : 'Não foi possível excluir esse registro.';
    } catch (error) {
      throw new Error('PlanService.delete: ' + error);
    }
  } // delete()

  async update(plan: PlanDto) {
    try {
      const row = await this.prisma.plan.update({
        where: {
          id: plan.id,
        },
        data: {
          name: plan.name,
          price: plan.price,
          max_images: plan.max_images,
          storage_space: plan.storage_space,
          observation: plan.observation,
          site_emphasis: plan.site_emphasis,
          active: plan.active,
          months_of_validity: plan.months_of_validity,
        },
      });

      return !row
        ? 'Atualização realizada com sucesso!'
        : 'Não foi possível atualizar esse registro.';
    } catch (error) {
      throw new Error('PlanService.update: ' + error);
    }
  }
}
