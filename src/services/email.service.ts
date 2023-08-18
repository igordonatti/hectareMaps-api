import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { PrismaService } from 'src/databases/prisma.service';
import { UserDto } from 'src/dtos/user.dto';
import { TokenUtil } from 'src/utils/token.util';

@Injectable()
export class EmailService {
  constructor(
    private readonly mailerService: MailerService,
    private readonly prisma: PrismaService,
    private readonly tokenUtil: TokenUtil,
  ) {}

  async send(subject: string, message: string, to?: string) {
    try {
      const mailOptions = {
        from: process.env.MAIL_USER,
        to: to ? to : process.env.MAIL_TO,
        subject: subject,
        html: message,
      };

      return await this.mailerService.sendMail(mailOptions);
    } catch (error) {
      throw new Error('EmailService.send: ' + error);
    }
  } // enviar

  static clientUpdateEmailMessage(data: UserDto) {}
}
