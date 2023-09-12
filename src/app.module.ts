import { Module } from '@nestjs/common';

import { BotModule } from '@Modules/bot/bot.module';
import { TransactionModule } from '@Modules/transaction/transaction.module';
import { DatabaseModule } from '@Modules/database/database.module';
import { ConfigModule } from '@Modules/config/config.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule,
    DatabaseModule,
    BotModule,
    TransactionModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
