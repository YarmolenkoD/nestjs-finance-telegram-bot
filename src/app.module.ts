import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { BotModule } from './bot/bot.module';
import { TransactionModule } from './transaction/transaction.module';
import { DatabaseModule } from './database/database.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { configuration } from './config/configuration';
// import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      envFilePath: '.env',
      isGlobal: true,
    }),
    DatabaseModule,
    BotModule,
    TransactionModule
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})

export class AppModule {}
