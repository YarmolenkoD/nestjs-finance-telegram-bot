import { Injectable } from '@nestjs/common';

import { commands } from '@Modules/bot/common/constants';
import { parseTransactionMessage } from '@Modules/bot/common/utils';
import { TransactionService } from '@Modules/transaction/transaction.service';

@Injectable()
export class BotService {
  constructor(
    private readonly transactionService: TransactionService,
  ) {}

  instruction(): string {
    return commands.map((item) => {
      return `Команда: ${item.command},\nОпис: ${item.description}\n\n`
    }).join('');
  }

  statistic(): string {
    return `Статистика витрат за весь час:`;
  }

  async transaction(message: string) {
    const parsed = parseTransactionMessage(message)

    if (parsed?.sum && parsed?.category) {
      await this.transactionService.add(parsed.sum, parsed.category)

      return `Транзакція:\ncума - ${parsed.sum}\nкатегорія - ${parsed.category}`;
    }

    return `Будь ласка введіть команду правильно у такому форматі "/transaction SUM CATEGORY"`;
  }
}
