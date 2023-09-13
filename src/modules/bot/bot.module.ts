import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { TelegrafModule } from 'nestjs-telegraf';

import { TransactionModule } from '@Modules/transaction/transaction.module';

import { BotService } from './bot.service';
import { BotUpdate } from './bot.update';

import { botName } from './common/constants';

@Module({
  imports: [
    TransactionModule,
    TelegrafModule.forRootAsync({
      imports: [ConfigModule],
      botName: botName,
      useFactory: (configService: ConfigService) => ({
        token: configService.get<string>('bot.token'),
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [BotService, BotUpdate],
})

export class BotModule {}
