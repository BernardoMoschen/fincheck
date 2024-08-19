import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/signInDto';
import { SignupDto } from './dto/signUpDto';
import { IsPublic } from 'src/shared/decorators/IsPublic';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-in')
  @IsPublic()
  authenticate(@Body() authenticateDto: SignInDto) {
    return this.authService.signIn(authenticateDto);
  }

  @Post('sign-up')
  @IsPublic()
  create(@Body() signupDto: SignupDto) {
    return this.authService.signUp(signupDto);
  }
}
