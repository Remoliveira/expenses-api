import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { ExpensesDTO, UpdateExpensesDTO } from './dto';
import { ExpensesService } from './expenses.service';

@UseGuards(AuthGuard('jwt'))
@Controller('expenses')
export class ExpensesController {
  constructor(private expensesService: ExpensesService) {}

  @Post()
  async insertExpense(@Body() expenseDTO: ExpensesDTO) {
    try {
      const mailInfo = this.expensesService.insertExpense(expenseDTO);
      return mailInfo;
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
