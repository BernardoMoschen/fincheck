import { Body, Controller, Post, SetMetadata } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/signInDto';
import { SignupDto } from './dto/signUpDto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-in')
  @SetMetadata('IS_PUBLIC', true)
  authenticate(@Body() authenticateDto: SignInDto) {
    return this.authService.signIn(authenticateDto);
  }

  @Post('sign-up')
  @SetMetadata('IS_PUBLIC', true)
  create(@Body() signupDto: SignupDto) {
    return this.authService.signUp(signupDto);
  }
}
