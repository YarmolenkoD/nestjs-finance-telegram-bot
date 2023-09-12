import { Context as ContextTelegraf } from 'telegraf';

export enum TelegrafContextSession {

}

export interface TelegrafContext extends ContextTelegraf {
  session: {
    type: TelegrafContextSession
  }
}
