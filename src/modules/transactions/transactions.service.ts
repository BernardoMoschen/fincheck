import { ValidateBankAccountOwnershipService } from './../bank-accounts/services/validate-bank-account-ownership.service';
import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { TransactionsRepository } from 'src/shared/database/repositories/transactions.repositories';

@Injectable()
export class TransactionsService {
  constructor(
    private readonly transactionsRepo: TransactionsRepository,
    private readonly validateBankAccountOwnershipService: ValidateBankAccountOwnershipService,
  ) {}

  async create(userId: string, createTransactionDto: CreateTransactionDto) {
    const { bankAccountId } = createTransactionDto;
    await this.validateBankAccountOwnershipService.validate(
      userId,
      bankAccountId,
    );
    return this.transactionsRepo.create({
      data: { userId, ...createTransactionDto },
    });
  }

  findAllByUserId(userId: string) {
    return this.transactionsRepo.findMany({
      where: {
        userId,
      },
    });
  }

  update(id: number, updateTransactionDto: UpdateTransactionDto) {
    return `This action updates a #${id} transaction ${updateTransactionDto}`;
  }

  remove(id: number) {
    return `This action removes a #${id} transaction`;
  }
}
