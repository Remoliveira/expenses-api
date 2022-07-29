import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDTO } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signUp(@Body() authDTO: AuthDTO) {
    console.log(authDTO);
    const token = await this.authService.signIn(authDTO);
    return {
      accesToken: token,
    };
  }
}
