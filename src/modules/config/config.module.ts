import { Module } from '@nestjs/common';

import { ConfigModule as NestConfigModule, ConfigService } from '@nestjs/config';

import { configuration } from './configuration';

@Module({
  imports: [
    NestConfigModule.forRoot({
      load: [configuration],
      envFilePath: '.env',
      isGlobal: true,
    }),
  ],
  providers: [ConfigService],
})

export class ConfigModule {}
