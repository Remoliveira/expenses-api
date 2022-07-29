import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as argon from 'argon2';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDTO } from './dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private config: ConfigService,
  ) {}

  async signIn(authDTO: AuthDTO): Promise<string> {
    const user = await this.prisma.user.findUnique({
      where: {
        email: authDTO.email,
      },
    });

    if (!user) {
      throw new ForbiddenException('Wrong credentials');
    }

    const passwordMatch = argon.verify(user.password, authDTO.password);

    if (!passwordMatch) {
      throw new ForbiddenException('Wrong credentials');
    }

    return this.signToken(user.id, user.email);
  }

  private async signToken(userId: string, email: string): Promise<string> {
    const data = {
      sub: userId,
      email,
    };

    return this.jwtService.signAsync(data, {
      expiresIn: '45m',
      secret: this.config.get('JWT_SECRET'),
    });
  }
}
