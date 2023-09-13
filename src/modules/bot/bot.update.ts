import {
  Update,
  Ctx,
  Start,
  Help,
  On,
  Hears,
  InjectBot,
  Message,
} from 'nestjs-telegraf';

import { Telegraf } from 'telegraf';

import { TelegrafContext } from './common/interfaces/telegraf-context.interface';

import {
  actionButtons,
  instructionText,
  statisticText
} from './bot.buttons';

import { BotService } from './bot.service';
import { botName } from './common/constants';

@Update()
export class BotUpdate {

  constructor(
    @InjectBot(botName) private readonly bot: Telegraf<TelegrafContext>,
    private readonly botService: BotService,
  ) {}

  @Start()
  async start(@Ctx() ctx: TelegrafContext) {
    await ctx.reply(
      `Вітаю, мене звати ${botName}, я буду вашим фінансовим помічником.`,
      actionButtons()
    );
  }

  @Help()
  async help(@Ctx() ctx: TelegrafContext) {
    await ctx.reply(this.botService.instruction());
  }

  @Hears(instructionText as any)
  async instruction(@Ctx() ctx: TelegrafContext) {
    await ctx.reply(this.botService.instruction());
  }

  @Hears(statisticText as any)
  async statistic(@Ctx() ctx: TelegrafContext) {
    await ctx.reply(this.botService.statistic());
  }

  @Hears(/\/transaction/ig as any)
  async transaction(@Message('text') message: string, @Ctx() ctx: TelegrafContext) {
    const replyMessage = await this.botService.transaction(message);
    await ctx.reply(replyMessage);
  }

  @On('text' as any)
  async on(@Message('text') message: string, @Ctx() ctx: TelegrafContext) {
    await ctx.reply(message);
  }
}
