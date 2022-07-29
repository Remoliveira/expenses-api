import { Module } from '@nestjs/common';
import { ExpensesModule } from './expenses/expenses.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { SModule } from './s/s.module';

@Module({
  imports: [ExpensesModule, PrismaModule, UserModule, AuthModule, SModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
