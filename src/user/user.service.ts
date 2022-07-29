import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { errorCode } from 'src/constants';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserDTO } from './dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async insertUser(userDTO: UserDTO) {
    try {
      await this.prisma.user.create({
        data: {
          email: userDTO.email,
          password: userDTO.password,
        },
      });
    } catch (error) {
      if (error.code === errorCode.ALREADY_EXIST) {
        throw new Error(error);
      }
    }
  }

  async getUser(id: string): Promise<User> {
    try {
      const user = await this.prisma.user.findUnique({
        where: { id },
      });
      return user;
    } catch (error) {
      throw new Error(error);
    }
  }
}
