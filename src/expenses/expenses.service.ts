import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Expense } from '@prisma/client';
import { errorCode } from 'src/constants';
import { MailService } from 'src/mail/mail.service';

import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from 'src/user/user.service';
import { ExpensesDTO, UpdateExpensesDTO } from './dto';

@Injectable()
export class ExpensesService {
  constructor(
    private prisma: PrismaService,
    private mailService: MailService,
    private userService: UserService,
  ) {}

  async insertExpense(expenseDTO: ExpensesDTO) {
    try {
      const user = await this.userService.getUser(expenseDTO.userId);

      await this.prisma.expense.create({
        data: {
          value: expenseDTO.value,
          userId: expenseDTO.userId,
          description: expenseDTO.description,
        },
      });

      return await this.mailService.sendConfirmationEmail(user);
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAllExpenses() {
    try {
      return this.prisma.expense.findMany();
    } catch (error) {
      throw new Error(error);
    }
  }

  async findOne(id: string): Promise<Expense> {
    try {
      return this.prisma.expense.findUnique({
        where: { id },
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateExpense(
    id: string,
    updateDto: UpdateExpensesDTO,
  ): Promise<Expense> {
    try {
      const { date, description, userId, value } = updateDto;

      const expense = await this.prisma.expense.update({
        where: { id },
        data: {
          date,
          userId,
          description,
          value,
        },
      });

      return expense;
    } catch (error) {
      if (error.code === errorCode.NOT_FOUND) {
        throw new HttpException('Expense not found', HttpStatus.BAD_REQUEST);
      }
    }
  }

  async removeExpense(id: string): Promise<void> {
    try {
      await this.prisma.expense.delete({
        where: { id },
      });
    } catch (error) {
      if (error.code === errorCode.NOT_FOUND) {
        throw new HttpException('Expense not found', HttpStatus.BAD_REQUEST);
      }
    }
  }
}
