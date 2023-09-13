import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { TransactionEntity } from './transaction.entity';

@Injectable()
export class TransactionService {
  constructor(@InjectRepository(TransactionEntity) private readonly transactionRepository: Repository<TransactionEntity>) { }
  async add(sum, category) {
    return await this.transactionRepository.save({
      category,
      sum
    });
  }

  async remove(id) {

  }

  async getAll() {
    return await this.transactionRepository.find();
  }
}
