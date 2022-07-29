import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { ExpensesController } from './expenses.controller';
import { ExpensesService } from './expenses.service';

@Module({
  controllers: [ExpensesController],
  providers: [ExpensesService],
  imports: [UserModule],
})
export class ExpensesModule {}
