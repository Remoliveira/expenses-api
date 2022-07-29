import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  async sendConfirmationEmail(user: User) {
    const testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

    const info = await transporter.sendMail({
      from: 'No Reply" <noreply@example.com>',
      to: user.email,
      subject: 'Despesa cadastrada',
      text: 'Sucesso!',
      html: '<b>Despesa cadastrada com sucesso</b>',
    });

    return info;
  }
}
