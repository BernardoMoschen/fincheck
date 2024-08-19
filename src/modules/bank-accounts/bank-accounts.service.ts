import { Injectable } from '@nestjs/common';
import { CreateBankAccountDto } from './dto/create-bank-account.dto';
import { UpdateBankAccountDto } from './dto/update-bank-account.dto';

@Injectable()
export class BankAccountsService {
  create(userId: string, createBankAccountDto: CreateBankAccountDto) {
    return `This action adds a new bankAccount  ${userId} ${createBankAccountDto}`;
  }

  findAll() {
    return `This action returns all bankAccounts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bankAccount`;
  }

  update(id: number, updateBankAccountDto: UpdateBankAccountDto) {
    return `This action updates a bankAccount ${id} ${updateBankAccountDto}`;
  }

  remove(id: number) {
    return `This action removes a #${id} bankAccount`;
  }
}
