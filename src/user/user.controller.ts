import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { UserDTO } from './dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async insertUser(@Body() userDTO: UserDTO) {
    try {
      await this.userService.insertUser(userDTO);
    } catch (error) {
      throw new HttpException('User already exist', HttpStatus.BAD_REQUEST);
    }
  }

  @Get(':id')
  async getUser(@Param('id') id: string) {
    const user = await this.userService.getUser(id);
    return user;
  }
}
