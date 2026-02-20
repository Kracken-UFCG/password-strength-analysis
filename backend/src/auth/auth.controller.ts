import { Body, Controller, Post } from '@nestjs/common';
import { InputDto } from './dto/InputDto';
import { AuthService } from './auth.service';

@Controller('auth/')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async hash(@Body() dto: InputDto) {
    return this.authService.hashPassword(dto.password, dto.mode);
  }
}
