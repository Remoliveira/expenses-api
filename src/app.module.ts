import { Module } from '@nestjs/common';
import { ExpensesModule } from './expenses/expenses.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MailModule } from './mail/mail.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ExpensesModule,
    PrismaModule,
    UserModule,
    AuthModule,
    MailModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
