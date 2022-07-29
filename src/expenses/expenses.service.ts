import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ExpensesDTO } from './dto';

@Injectable()
export class ExpensesService {
  constructor(private prisma: PrismaService) {}

  async insertExpense(expenseDTO: ExpensesDTO) {
    console.log(expenseDTO);
    await this.prisma.expense.create({
      data: {
        value: expenseDTO.value,
        userId: expenseDTO.userId,
      },
    });
  }
}
