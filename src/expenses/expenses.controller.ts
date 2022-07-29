import { Body, Controller, Post } from '@nestjs/common';
import { ExpensesDTO } from './dto';
import { ExpensesService } from './expenses.service';

@Controller('expenses')
export class ExpensesController {
  constructor(private expensesService: ExpensesService) {}

  @Post()
  async insertExpense(@Body() expenseDTO: ExpensesDTO) {
    this.expensesService.insertExpense(expenseDTO);
  }
}
