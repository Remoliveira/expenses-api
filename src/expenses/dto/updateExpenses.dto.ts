import { Transform } from 'class-transformer';
import {
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsUUID,
  MaxDate,
  MaxLength,
} from 'class-validator';

class UpdateExpensesDTO {
  @IsString()
  @IsOptional()
  @MaxLength(191)
  description?: string;

  @IsUUID()
  @IsOptional()
  userId?: string;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  value?: number;

  @Transform(({ value }) => new Date(value))
  @MaxDate(new Date())
  @IsOptional()
  date?: Date;
}

export { UpdateExpensesDTO };
