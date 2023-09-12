import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';

import { ConfigModule, ConfigService } from '@nestjs/config';

import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: 'db' || configService.get<string>('database.host'),
        port: 5432 || configService.get<number>('database.port'),
        username: 'admin' || configService.get<string>('database.username'),
        password: 'admin' || configService.get<string>('database.password'),
        database: 'finance-bot-db' || configService.get<string>('database.name'),
        entities: [] || [join(__dirname, '**', '*.entity{.ts, .js}')],
        migrations: [] || [join(__dirname, '**', '*.migration{.ts, .js}')],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
