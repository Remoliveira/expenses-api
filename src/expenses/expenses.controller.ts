import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { ExpensesDTO, UpdateExpensesDTO } from './dto';
import { ExpensesService } from './expenses.service';

@Controller('expenses')
export class ExpensesController {
  constructor(private expensesService: ExpensesService) {}

  @Post()
  async insertExpense(@Body() expenseDTO: ExpensesDTO) {
    try {
      this.expensesService.insertExpense(expenseDTO);
    } catch (error) {
      throw new Error(error);
    }
  }

  @Get()
  findAllExpenses() {
    return this.expensesService.findAllExpenses();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.expensesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateDto: UpdateExpensesDTO) {
    return this.expensesService.updateExpense(id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.expensesService.removeExpense(id);
  }
}
