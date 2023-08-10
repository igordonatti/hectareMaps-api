import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/databases/prisma.service';
import { readFile } from 'fs/promises';
import { writeFile } from 'fs/promises';

const siteSettings = './configuration.json';

@Injectable()
export class ConfigureService {
  constructor(private prisma: PrismaService) {}

  async getData() {
    try {
      const data = await readFile(siteSettings, 'utf8');
      return data;
    } catch (error) {
      throw new Error('ConfigureService.getData: ' + error);
    }
  } // getData()

  async getPublicData() {
    try {
      const data = await readFile(siteSettings);
      const jsonData = JSON.parse(data.toString('utf8'));
      return {
        icon: jsonData.icon,
        hero: jsonData.hero,
        about: jsonData.about,
        serrvice: jsonData.service,
        plan: jsonData.plan,
        video: jsonData.video,
        contact: jsonData.contact,
        api: jsonData.api,
        admin: jsonData.admin,
        company: jsonData.company,
      };
    } catch (error) {
      throw new Error('ConfigureService.getPublicData: ' + error);
    }
  } // getPublicData()

  async setData(json: string) {
    try {
      const jsonString = JSON.stringify(json, null, 2);
      await writeFile(siteSettings, jsonString, 'utf8');
    } catch (error) {
      throw new Error('ConfigureService.setData: ' + error);
    }
  } // setData()
} // class
