import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDTO } from './dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async signIn(authDTO: AuthDTO) {
    console.log(authDTO);
    return await 'hello';
  }
}
