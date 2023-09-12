import { Markup } from 'telegraf';

export const instructionText = '📋 Інструкція'
export const statisticText = '📋 Статистика'

export function actionButtons() {
  return Markup.keyboard(
    [
      Markup.button.callback(instructionText, '/help'),
      Markup.button.callback(statisticText, '/statistic'),
    ],
    {
      columns: 2,
    },
  );
}
