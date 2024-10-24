import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBankAccountDto } from './dto/create-bank-account.dto';
import { UpdateBankAccountDto } from './dto/update-bank-account.dto';
import { BankAccountsRepository } from 'src/shared/database/repositories/bankAccounts.respositories';

@Injectable()
export class BankAccountsService {
  constructor(private readonly bankAccountsRepo: BankAccountsRepository) {}

  create(userId: string, createBankAccountDto: CreateBankAccountDto) {
    const { color, initialBalance, name, type } = createBankAccountDto;
    return this.bankAccountsRepo.create({
      data: {
        color,
        initialBalance,
        name,
        type,
        userId,
      },
    });
  }

  findAllByUserId(userId: string) {
    return this.bankAccountsRepo.findMany({
      where: {
        userId,
      },
    });
  }

  async update(
    userId: string,
    bankAccountId: string,
    updateBankAccountDto: UpdateBankAccountDto,
  ) {
    this.validateBankAccountOwnership(userId, bankAccountId);

    const { color, initialBalance, name, type } = updateBankAccountDto;

    return this.bankAccountsRepo.update({
      where: {
        id: bankAccountId,
      },
      data: {
        color,
        initialBalance,
        name,
        type,
      },
    });
  }

  async remove(userId: string, bankAccountId: string) {
    this.validateBankAccountOwnership(userId, bankAccountId);

    await this.bankAccountsRepo.delete({
      where: {
        id: bankAccountId,
      },
    });

    return null;
  }

  private async validateBankAccountOwnership(
    userId: string,
    bankAccountId: string,
  ) {
    const isOwner = this.bankAccountsRepo.findFirst({
      where: { userId, id: bankAccountId },
    });

    if (!isOwner) {
      throw new NotFoundException('Bank account not found');
    }
  }
}
