import { IsNumber, IsPositive, IsString, IsUUID } from 'class-validator';

class ExpensesDTO {
  @IsString()
  description: string;

  @IsUUID()
  userId: string;

  @IsNumber()
  @IsPositive()
  value: number;
}

export { ExpensesDTO };
