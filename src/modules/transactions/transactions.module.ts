import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { BankAccountsModule } from '../bank-accounts/bank-accounts.module';

@Module({
  controllers: [TransactionsController],
  providers: [TransactionsService],
  imports: [BankAccountsModule],
})
export class TransactionsModule {}
