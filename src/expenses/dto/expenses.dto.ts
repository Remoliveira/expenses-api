import {
  IsNumber,
  IsPositive,
  IsString,
  IsUUID,
  MaxLength,
} from 'class-validator';

class ExpensesDTO {
  @IsString()
  @MaxLength(191)
  description: string;

  @IsUUID()
  userId: string;

  @IsNumber()
  @IsPositive()
  value: number;
}

export { ExpensesDTO };
