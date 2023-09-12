import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { TelegrafModule } from 'nestjs-telegraf';

import { BotService } from './bot.service';
import { BotUpdate } from './bot.update';

@Module({
  imports: [
    TelegrafModule.forRootAsync({
      imports: [ConfigModule],
      botName: 'Buddy',
      useFactory: (configService: ConfigService) => ({
        token: configService.get<string>('bot.token'),
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [BotService, BotUpdate],
})

export class BotModule {}
