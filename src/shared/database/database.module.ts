import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UsersRepository } from './repositories/users.repositories';
import { CategoriesRepository } from './repositories/categories.repositories';
import { BankAccountRepository } from './repositories/bankAccount.respositories';

@Global()
@Module({
  providers: [
    PrismaService,
    UsersRepository,
    CategoriesRepository,
    BankAccountRepository,
  ],
  exports: [UsersRepository, CategoriesRepository, BankAccountRepository],
})
export class DatabaseModule {}
