import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getDefaultMessage(): string {
    return 'This is api for telegram financial bot.';
  }
}
