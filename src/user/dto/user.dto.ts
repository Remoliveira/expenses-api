import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

class UserDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

export { UserDTO };
