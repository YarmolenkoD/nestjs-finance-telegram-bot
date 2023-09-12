import { Injectable } from '@nestjs/common';

import { commands } from './common/constants/commands';

@Injectable()
export class BotService {
  instruction(): string {
    return commands.map((item) => {
      return `Команда: ${item.command},\nОпис: ${item.description}\n\n`
    }).join('');
  }

  statistic(): string {
    return `Статистика витрат за весь час:`;
  }

  transaction(message: string): string {
    return `Транзакція:`;
  }
}
