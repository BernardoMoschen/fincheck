import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    JwtModule.register({
      signOptions: { expiresIn: '7d' },
      secret: 'unsecure-jwt-secret',
    }),
  ],
})
export class AuthModule {}
